// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './playwright-tests/tests',
  use: {
    baseURL: 'https://pbl-pipe-guard.onrender.com', // URL base da sua aplicação
    browserName: 'chromium',
  },
});
