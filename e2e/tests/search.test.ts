// playwright-tests/tests/search.test.ts
import { test, expect } from '@playwright/test';
import { SearchPage } from '../pages/searchPage';

test.describe('Search tests', () => {
  test('should search with a valid query', async ({ page }) => {
    const searchPage = new SearchPage(page);
    await searchPage.goto();

    await searchPage.search('test query');
    
    // Adicione asserções aqui para verificar se a pesquisa foi bem-sucedida.
    // Exemplo: verificar se os resultados são exibidos corretamente
    const results = searchPage.getResults();
    await expect(results); // Atualize conforme necessário
  });
});
