// search.spec.js

// Importe a função pesquisar aqui
// Por exemplo: import { pesquisar } from './caminho/do/seu/arquivo';

describe('Testes para a função pesquisar', () => {
    let searchBar;
    let searchButton;
  
    beforeEach(() => {
      // Simule a criação de elementos HTML relevantes antes de cada teste
      document.body.innerHTML = `
        <form id="searchForm">
          <input id="searchInput" type="text">
          <button id="searchButton" type="submit">Pesquisar</button>
        </form>
      `;
      searchBar = document.getElementById('searchInput');
      searchButton = document.getElementById('searchButton');
  
      // Substitua o evento de submissão do formulário para evitar comportamento padrão
      searchBar.addEventListener('input', (event) => {
        event.preventDefault();
      });
    });
  
    it('deve chamar a função pesquisar ao clicar no botão de pesquisa', () => {
      // Simule a interação do usuário clicando no botão de pesquisa
      spyOn(window, 'pesquisar');
      searchButton.click();
  
      // Verifique se a função pesquisar foi chamada
      expect(pesquisar).toHaveBeenCalled();
    });
  
    it('deve chamar a função pesquisar ao digitar no campo de pesquisa', () => {
      // Simule a interação do usuário digitando no campo de pesquisa
      spyOn(window, 'pesquisar');
      searchBar.value = 'Exemplo de pesquisa';
      searchBar.dispatchEvent(new Event('input'));
  
      // Verifique se a função pesquisar foi chamada
      expect(pesquisar).toHaveBeenCalled();
    });
  });
  