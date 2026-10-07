/*
    Esse arquivo contém a definição do componente principal da página.
 */
import { useState } from "react";

// Importa os componentes usados neste arquivo
import CabecalhoLoja from "./componentes/CabecalhoLoja/CabecalhoLoja";
import PainelDeRoupas from "./componentes/PainelDeRoupas/PainelDeRoupas";
import PainelCarrinho from "./componentes/PainelCarrinho/PainelCarrinho";

/* 
    Todo componente React é definido como uma função cujo nome é o nome do componente. A função deve
    retornar código JSX, que permite misturar HTML com Javascript.
 */
function App() {
  // A variável mostraPainelCarrinho armazena o estado interno deste componente que especifica se o
  // painel com os itens do carrinho está sendo exibido ou não.
  const [mostraPainelCarrinho, setMostraPainelCarrinho] = useState(false);

  // CabecalhoLoja, PainelDeRoupas e PainelCarrinho são os três principais componentes de conteúdo,
  // correspondendo, respectivamente ao cabeçalho da página (com logotipo, campo de pesquisa e ícone
  // de carrinho), painel com os cards das roupas, e o painel do carrinho que está inicialmente
  // oculto e só é exibido quando se clica no ícone do carrinho de compras.
  return (
      <div>
        <CabecalhoLoja aoClicarCarrinho={() => setMostraPainelCarrinho(true)}/>
        <PainelDeRoupas id="lista-roupas"/>
        {mostraPainelCarrinho && <PainelCarrinho aoFechar={() => setMostraPainelCarrinho(false)}/>}
      </div>
  );
}

// O componente App será exportado para ser usado fora deste arquivo.
export default App;
