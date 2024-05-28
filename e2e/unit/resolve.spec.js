// resolve.spec.js

// Importe a função resolverVazamento aqui
// Por exemplo: import { resolverVazamento } from './caminho/do/seu/arquivo';

describe('Testes para a função resolverVazamento', () => {
    let resolveButton;
  
    beforeEach(() => {
      // Simule a criação de elementos HTML relevantes antes de cada teste
      document.body.innerHTML = `
        <button id="resolveButton">Resolver Vazamento</button>
      `;
      resolveButton = document.getElementById('resolveButton');
    });
  
    it('deve chamar a função resolverVazamento ao clicar no botão de resolver', () => {
      // Simule a interação do usuário clicando no botão de resolver
      spyOn(window, 'resolverVazamento');
      resolveButton.click();
  
      // Verifique se a função resolverVazamento foi chamada
      expect(resolverVazamento).toHaveBeenCalled();
    });
  });
  