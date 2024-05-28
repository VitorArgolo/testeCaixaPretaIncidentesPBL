// playwright-tests/tests/sensors.test.ts
import { test, expect } from '@playwright/test';
import { SensorsPage } from '../pages/sensorsPage';

test.describe('Sensors tests', () => {
  test('should create, edit and delete sensor', async ({ page }) => {
    const sensorsPage = new SensorsPage(page);
    await sensorsPage.goto();

    // Criar um novo sensor
    await sensorsPage.createNewSensor('New Sensor', 'Description of new sensor', false, 'Baixa');

    // Verificar se o sensor foi adicionado à lista de sensores
    const sensorList = await sensorsPage.getSensorList();
    await expect(sensorList).toContainText('New Sensor');

    // Editar o sensor recém-criado
    await sensorsPage.editSensor('Edited Sensor', 'Description of edited sensor', true, 'Alta');

    // Verificar se o sensor editado está na lista de sensores
    await expect(sensorList).toContainText('Edited Sensor');

    // Deletar o sensor editado
    await sensorsPage.deleteSensor();

    // Verificar se o sensor foi removido da lista de sensores
    await expect(sensorList).not.toContainText('Edited Sensor');
  });
});
