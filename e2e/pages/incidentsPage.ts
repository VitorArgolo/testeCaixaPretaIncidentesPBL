// playwright-tests/pages/incidentsPage.ts
import { Page } from '@playwright/test';

export class IncidentsPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/incidents'); // Atualize com a rota correta da lista de incidentes
  }

  async clickIncidentDetails(incidentId: string) {
    await this.page.click(`a[href="/incidents/${incidentId}"]`);
  }
}
