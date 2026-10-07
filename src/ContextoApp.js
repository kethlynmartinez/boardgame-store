import { createContext, useContext, useState } from "react";
import Produtos from './componentes/Produtos/Produtos.js';

// Criação do contexto da aplicação que armazenará variáveis de estado compartilhadas por diferentes
// componentes. Em nosso caso isso envolve os produtos mostrados na página e os itens no carrinho de
// compras. A função createContext é uma função do React para criação de contextos.
const ContextoProdutos = createContext();

// Criação de um componente que cria um Provider para envolver a aplicação e armazenar as variáveis
// de estado que armazenarão os produtos mostrados e os itens do carrinho de compras.
export function ContextoGeralApp({ children }) {
  // useState é uma função do React para definir uma variável de estado. Ela retorna a variável em si
  // e uma função para alteração. O valor passado para useState é o valor inicial da variável. No
  // caso dos produtos mostrados, o valor inicial é a lista de todos os produtos da loja, obtido 
  // a partir de Produtos (que é importado acima a partir da lista no arquivo Produtos.js). Já no 
  // caso do carrinho de compras, o valor inicial é um array vazio (o carrinho não tem itens).
  const [produtos, setProdutos] = useState(Produtos);
  const [carrinho, setCarrinho] = useState([]);

  // Aqui são definidas duas funções que serão acessíveis a outros componentes e serão usadas, 
  // respectivamente, para atualizar a lista de produtos exibida e o carrinho de compras. Outros
  // componentes poderão modificar essas variáveis de estado. Por exemplo, o campo de pesquisa
  // modifica os produtos listados e, ao clicar nos botões de adicionar ao carrinho de cada card,
  // o carrinho de compras será modificado.
  const atualizarProdutos = (novosProdutos) => setProdutos(novosProdutos);

  // Adiciona um produto ao carrinho. Se o produto já estiver no carrinho, apenas incrementa a
  // quantidade (de forma imutável, criando um novo array/objeto) em vez de alterar o item existente
  // diretamente — alterar o estado diretamente impede o React de perceber a mudança e atualizar a tela.
  const adicionarAoCarrinho = (produto) => {
    setCarrinho(carrinhoAtual => {
      const jaExiste = carrinhoAtual.some(item => item.produto.codigo === produto.codigo);

      if (jaExiste) {
        return carrinhoAtual.map(item =>
          item.produto.codigo === produto.codigo
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }

      return carrinhoAtual.concat([{
        numero: carrinhoAtual.length + 1,
        produto,
        quantidade: 1
      }]);
    });
  };
  
  // Retorna o provider fornecendo a listagem de produtos e itens do carrinho, bem como as funções
  // para atualização.
  return (
    <ContextoProdutos.Provider value={{ produtos, atualizarProdutos, carrinho, adicionarAoCarrinho }}>
      {children}
    </ContextoProdutos.Provider>
  );
}

// Criamos um hook para facilitar o uso nos componentes. Essa função será usada para que outros 
// componentes acessem o contexto compartilhado.
export function useProdutos() {
  return useContext(ContextoProdutos);
}
