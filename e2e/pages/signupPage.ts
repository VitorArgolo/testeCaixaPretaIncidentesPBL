// playwright-tests/pages/signupPage.ts
import { Page } from '@playwright/test';

export class SignupPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/signup'); // Atualize com a rota correta da página de registro de usuário
  }

  async fillForm(email: string, password: string, name: string, phone: string) {
    await this.page.fill('input[formControlName="email"]', email);
    await this.page.fill('input[formControlName="password"]', password);
    await this.page.fill('input[formControlName="name"]', name);
    await this.page.fill('input[formControlName="phone"]', phone);
  }

  async submitForm() {
    await this.page.click('button[type="submit"]');
  }

  async goToLoginPage() {
    await this.page.click('button.btn-secondary');
  }

  async getErrorMessage() {
    return this.page.textContent('.alert.alert-danger');
  }
}
