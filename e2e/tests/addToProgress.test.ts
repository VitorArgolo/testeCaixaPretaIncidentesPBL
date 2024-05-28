// playwright-tests/tests/addToProgress.test.ts
import { test, expect } from '@playwright/test';
import { IncidentsPage } from '../pages/incidentsPage';
import { IncidentDetailsPage } from '../pages/incidentDetailsPage';

test.describe('Add to Progress tests', () => {
  test('should add incident to progress page', async ({ page }) => {
    const incidentsPage = new IncidentsPage(page);
    const incidentDetailsPage = new IncidentDetailsPage(page);

    await incidentsPage.goto();
    await incidentsPage.clickIncidentDetails('incidentId'); // Substitua 'incidentId' pelo ID real do incidente

    await incidentDetailsPage.clickAddToProgressButton();

    // Agora você pode adicionar asserções para verificar se o incidente foi adicionado à página de progresso
    // Você pode, por exemplo, verificar se o incidente está presente na lista de incidentes na página de progresso.
  });
});
