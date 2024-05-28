// removeProgress.spec.js

// Importe a função removerIncidentProgresso aqui
// Por exemplo: import { removerIncidentProgresso } from './caminho/do/seu/arquivo';

describe('Testes para a função removerIncidentProgresso', () => {
    let removeButton;
  
    beforeEach(() => {
      // Simule a criação de elementos HTML relevantes antes de cada teste
      document.body.innerHTML = `
        <button id="removeButton">Remover de Progresso</button>
      `;
      removeButton = document.getElementById('removeButton');
    });
  
    it('deve chamar a função removerIncidentProgresso ao clicar no botão de remover', () => {
      // Simule a interação do usuário clicando no botão de remover
      spyOn(window, 'removerIncidentProgresso');
      removeButton.click();
  
      // Verifique se a função removerIncidentProgresso foi chamada
      expect(removerIncidentProgresso).toHaveBeenCalled();
    });
  });
  