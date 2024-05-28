// progress.spec.js

// Importe a função adicionarProgresso aqui
// Por exemplo: import { adicionarProgresso } from './caminho/do/seu/arquivo';

describe('Testes para a função adicionarProgresso', () => {
    let addButton;
  
    beforeEach(() => {
      // Simule a criação de elementos HTML relevantes antes de cada teste
      document.body.innerHTML = `
        <button id="addButton">Adicionar em progresso</button>
      `;
      addButton = document.getElementById('addButton');
    });
  
    it('deve chamar a função adicionarProgresso ao clicar no botão de adicionar', () => {
      // Simule a interação do usuário clicando no botão de adicionar
      spyOn(window, 'adicionarProgresso');
      addButton.click();
  
      // Verifique se a função adicionarProgresso foi chamada
      expect(adicionarProgresso).toHaveBeenCalled();
    });
  });
  