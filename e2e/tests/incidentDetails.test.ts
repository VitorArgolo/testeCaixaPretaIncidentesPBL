// playwright-tests/tests/incidentDetails.test.ts
import { test, expect } from '@playwright/test';
import { IncidentsPage } from '../pages/incidentsPage';
import { IncidentDetailsPage } from '../pages/incidentDetailsPage';

test.describe('Incident Details tests', () => {
  test('should display incident details', async ({ page }) => {
    const incidentsPage = new IncidentsPage(page);
    const incidentDetailsPage = new IncidentDetailsPage(page);

    await incidentsPage.goto();
    await incidentsPage.clickIncidentDetails('incidentId'); // Substitua 'incidentId' pelo ID real do incidente

    const incidentTitle = await incidentDetailsPage.getIncidentTitle();
    await expect(incidentTitle).toBeVisible();

    const incidentDescription = await incidentDetailsPage.getIncidentDescription();
    await expect(incidentDescription).toBeVisible();

    const incidentLeakStatus = await incidentDetailsPage.getIncidentLeakStatus();
    await expect(incidentLeakStatus).toBeVisible();

    const incidentSeverity = await incidentDetailsPage.getIncidentSeverity();
    await expect(incidentSeverity).toBeVisible();
  });
});
