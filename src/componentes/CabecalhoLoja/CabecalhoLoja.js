/*
    Este componente é o cabeçalho da página.
 */

import styles from './CabecalhoLoja.module.css'; // Importa os estilos usados no componente.
import logo from './logo.png'; // Importa o logotipo mostrado.
import CampoDePesquisa from '../CampoDePesquisa/CampoDePesquisa.js'; // Importa o componente do campo de pesquisa.
import IconeCarrinhoDeCompras from '../IconeCarrinhoDeCompras/IconeCarrinhoDeCompras.js'; // Importa o componente do ícone do carrinho de compras.

// O componente do cabeçalho da loja receberá parâmetros acessíveis através de "props".
function CabecalhoLoja(props) {
    // No código JSX, a propriedade "class" é substituída por "className". Este componente usa
    // outros dois internamente: o componente CampoDePesquisa que mostra a caixa para digitação
    // dos termos da pesquisa de roupas e o ícone do carrinho de compras. Para este último, 
    // passados um atributo que é a função a ser executada quando se clicar no ícone do carrinho,
    // que por sua vez é passada como parâmetro para este componente num argumento de mesmo nome.
    return (
        <header className={styles.cabecalhoLoja}>
            <img className={styles.logotipo} alt="Logotipo da Loja" src={logo}/>
            <div></div>
            <div className={styles.controles}>
                <CampoDePesquisa />
                <IconeCarrinhoDeCompras aoClicarCarrinho={props.aoClicarCarrinho}/>
            </div>
        </header>
    );
}

// Exporta o componente para uso externo.
export default CabecalhoLoja;