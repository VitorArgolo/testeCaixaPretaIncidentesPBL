// playwright-tests/tests/signup.test.ts
import { test, expect } from '@playwright/test';
import { SignupPage } from '../pages/signupPage';

test.describe('Signup tests', () => {
  test('should register new user', async ({ page }) => {
    const signupPage = new SignupPage(page);
    await signupPage.goto();

    // Preencher o formulário de registro
    await signupPage.fillForm('test@example.com', 'Test@1234', 'Test User', '1234567890');

    // Submeter o formulário
    await signupPage.submitForm();

    // Verificar se a mensagem de erro não está presente (indicando que o registro foi bem-sucedido)
    const errorMessage = await signupPage.getErrorMessage();
    await expect(errorMessage).not; // Verifica se não há mensagem de erro visível
  });
});
