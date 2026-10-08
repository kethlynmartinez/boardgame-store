/*
    Componente que exibe o ícone clicável do carrinho de compras juntamente com um pequeno rótulo que
    mostra o número de itens no carrinho.
 */

import styles from './IconeCarrinhoDeCompras.module.css'; // Importa os estilos CSS usados no componente.
import iconeCarrinho from './carrinho-de-compras.png'; // Ícone do carrinho de compras que é mostrado neste componente.
import { useProdutos } from "../../ContextoApp.js"; // Acessa a função para acesso ao contexto global.

// Este componente recebe parâmetros especificados em "props". O único parâmetro obrigatório é 
// aoClicarCarrinho que especifica qual função deve ser executada ao se clicar no ícone do carrinho
// de compras. 
function IconeCarrinhoDeCompras(props) {
    const { carrinho } = useProdutos(); // Obtém o carrinho de compras do contexto global.

    // Soma as quantidades de todos os itens (total de unidades, não de produtos diferentes).
    const totalUnidades = carrinho.reduce((soma, item) => soma + item.quantidade, 0);

    // Retorna o código JSX do componente.
    return (
        <div className={styles.container}>
            <img className={styles.icone} alt="Imagem do carrinho de compras" src={iconeCarrinho} onClick={props.aoClicarCarrinho}/>
            <span className={styles.contagem}>{totalUnidades}</span>
        </div>
    );
}

// Exporta o componente para uso externo.
export default IconeCarrinhoDeCompras;
