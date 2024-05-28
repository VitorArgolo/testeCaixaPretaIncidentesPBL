// playwright-tests/pages/sensorsPage.ts
import { Page } from '@playwright/test';

export class SensorsPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/sensors'); // Atualize com a rota correta da página de sensores
  }

  async createNewSensor(title: string, description: string, leak: boolean, severity: string) {
    await this.page.fill('input[name="title"]', title);
    await this.page.fill('textarea[name="description"]', description);
    if (leak) await this.page.check('input[name="leak"]');
    await this.page.selectOption('select[name="severity"]', { label: severity });
    await this.page.click('button.btn-primary');
  }

  async editSensor(title: string, description: string, leak: boolean, severity: string) {
    await this.page.click('button.btn-primary');
    await this.page.fill('input[name="title"]', title);
    await this.page.fill('textarea[name="description"]', description);
    if (leak) await this.page.check('input[name="leak"]');
    await this.page.selectOption('select[name="severity"]', { label: severity });
    await this.page.click('button.btn-success');
  }

  async deleteSensor() {
    await this.page.click('button.btn-danger');
  }

  async getSensorList() {
    return this.page.locator('ul.list-group');
  }

  async getErrorMessage() {
    return this.page.textContent('p[style="color: red;"]');
  }
}
