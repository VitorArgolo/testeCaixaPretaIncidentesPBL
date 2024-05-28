// playwright-tests/tests/login.test.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test.describe('Login tests', () => {
  test('should login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();

    // Preencher o formulário de login
    await loginPage.fillForm('test@example.com', 'Test@1234');

    // Submeter o formulário
    await loginPage.submitForm();

    // Verificar se o usuário foi redirecionado para a página correta após o login bem-sucedido
    const currentURL = page.url();
    await expect(currentURL).toContain('/dashboard'); // Atualize com a URL correta da página de dashboard após o login
  });
});
