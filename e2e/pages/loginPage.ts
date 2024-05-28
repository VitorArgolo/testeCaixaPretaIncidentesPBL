// playwright-tests/pages/loginPage.ts
import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/login'); // Atualize com a rota correta da página de login
  }

  async fillForm(email: string, password: string) {
    await this.page.fill('input[name="email"]', email);
    await this.page.fill('input[name="password"]', password);
  }

  async submitForm() {
    await this.page.click('button');
  }

  async goToRegisterPage() {
    await this.page.click('button[routerLink="/register"]');
  }
}
