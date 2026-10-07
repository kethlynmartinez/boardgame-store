/*
    Este componente mostra um card com os dados de uma roupa na tela.
 */

import styles from './Card.module.css'; // Importa estilos CSS do componente.
import { useProdutos } from "../../ContextoApp.js"; // Importa função para acesso ao contexto.

// Este componente receve parâmetros em props. O principal parte do que está em props serão os
// dados do produto selecionado.
function Card(props) {
    // Pega os dados do carrinho de compras e método de atualização.
    const { adicionarAoCarrinho } = useProdutos();

    // Insere o produto clicado no carrinho de compras. A lógica de verificar se o produto já existe
    // e incrementar a quantidade agora vive no contexto (ContextoApp.js), de forma imutável.
    function comprar() {
        adicionarAoCarrinho(props.produto);
    }

    // Mostra a marca de oferta ou não. O dado "oferta" vem de dentro do objeto produto.
    let marcaOferta = "";
    if(props.produto.oferta) {
        marcaOferta = <div className={styles.oferta}>Oferta</div>
    }

    // Retorna o código JSX.
    return(
        <div className={styles.card}>
            <img className={styles.foto} alt={props.produto.nome} src={props.foto}/>
            <p>{props.produto.nome}</p>
            <p className={styles.preco}>{props.produto.preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
            <button className={styles.botao} onClick={comprar}>Adicionar ao Carrinho</button>
            {marcaOferta}
        </div>
    );
}

// Exporta o componente para uso externo.
export default Card;