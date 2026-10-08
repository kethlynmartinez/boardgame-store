# Loja de Boardgames

Vitrine de jogos de tabuleiro feita com React. A pessoa vê os jogos, pesquisa por nome, adiciona ao carrinho e consulta o total da compra.

Projeto de curso, desenvolvido na disciplina de Front-end.

Site publicado: https://kethlynmartinez.github.io/loja/

## O que o projeto faz

- Lista 10 jogos com foto, nome, preço e selo de oferta.
- Pesquisa por nome enquanto a pessoa digita.
- Adiciona jogos ao carrinho. Se o jogo já está no carrinho, aumenta a quantidade.
- Mostra, no ícone do carrinho, o total de unidades adicionadas.
- Abre o painel do carrinho com quantidade, subtotal e total.

## Tecnologias

React 19, Context API, CSS Modules e Create React App.

## Como funciona o código

- `src/ContextoApp.js` guarda a lista de produtos e o carrinho. O carrinho é atualizado sem alterar o estado diretamente.
- `src/componentes` tem um componente por pasta: cabeçalho, campo de pesquisa, card, painel de produtos, ícone e painel do carrinho.
- Os dados dos jogos ficam em `src/componentes/Produtos/Produtos.js`.

## Como rodar no seu computador

Instale o Node.js e rode, dentro da pasta do projeto:

```
npm install
npm start
```

O site abre em http://localhost:3000.

Para gerar a versão final: `npm run build`.

## Publicação

O arquivo `.github/workflows/deploy.yml` publica o site no GitHub Pages a cada alteração na branch `main`. Para ativar, vá em Settings, Pages, e escolha GitHub Actions como fonte.

## Limitações

- Não há finalização de compra nem servidor. O carrinho existe apenas enquanto a página está aberta.
- Os produtos vêm de uma lista fixa no código.
