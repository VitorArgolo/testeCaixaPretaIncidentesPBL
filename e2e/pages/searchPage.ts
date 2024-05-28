// playwright-tests/pages/searchPage.ts
import { Page } from '@playwright/test';

export class SearchPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/'); // Acessa a homepage
  }

  async search(query: string) {
    await this.page.fill('input[name="title"]', query);
    await this.page.click('button[type="submit"]');
  }

  async getResults() {
    return this.page.locator('.result-selector'); // Substitua pelo seletor correto dos resultados
  }
}
