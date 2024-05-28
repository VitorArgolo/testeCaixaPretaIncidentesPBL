// playwright-tests/pages/incidentDetailsPage.ts
import { Page } from '@playwright/test';

export class IncidentDetailsPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/incidents/:incidentId'); // Atualize com a rota correta dos detalhes do incidente
  }

  async getIncidentTitle() {
    return this.page.locator('.incident-details tbody tr:nth-child(1) td:nth-child(2)');
  }

  async getIncidentDescription() {
    return this.page.locator('.incident-details tbody tr:nth-child(2) td:nth-child(2)');
  }

  async getIncidentLeakStatus() {
    return this.page.locator('.incident-details tbody tr:nth-child(3) td:nth-child(2)');
  }

  async getIncidentSeverity() {
    return this.page.locator('.incident-details tbody tr:nth-child(4) td:nth-child(2)');
  }


  async clickAddToProgressButton() {
    await this.page.click('.incident-details button.btn-primary'); 
  }
}
