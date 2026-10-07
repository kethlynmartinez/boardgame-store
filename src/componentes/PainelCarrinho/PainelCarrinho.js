/*
    Mostra o painel com detalhes sobre o carrinho de compras.
 */
import './PainelCarrinho.css'; // Importa os estilos CSS usados no componente.
import { useProdutos } from "../../ContextoApp.js"; // Acessa a função para acesso ao contexto global.

// O parâmetro props armazena os valores dos parâmetros passados ao componente. O único parâmetro 
// obrigatório é aoFechar, que especifica qual função deve ser executada quando o usuário clica no
// botão Fechar do painel. 
function PainelCarrinho(props) {
    // Acessa o carrinho de compras no contexto global.
    const { carrinho } = useProdutos();

    // Esta função calcula o total de todos os itens no carrinho.
    function calculaTotalCarrinho() {
        let total = 0;
        for(let i = 0; i < carrinho.length; i++) {
            total += carrinho[i].produto.preco * carrinho[i].quantidade;
        }
        return total;
    }

    // Código JSX para o painel. Note o uso do método map para gerar uma linha na tabela para cada
    // produto no carrinho de compras.
    return (
        <div id="painel-carrinho">
            <h1>Seu Carrinho</h1>
            <table>
                <thead>
                    <th>#</th>
                    <th>Produto</th>
                    <th>Preço</th>
                    <th>Quantidade</th>
                    <th>Subtotal</th>
                </thead>
                <tbody id="conteudo-carrinho">
                    { 
                        carrinho.map((item) => (
                            <tr key={item.numero}>
                                <td>{item.numero}</td>
                                <td>{item.produto.nome}</td>
                                <td>{item.produto.preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</td>
                                <td>{item.quantidade}</td>
                                <td>{(item.produto.preco * item.quantidade).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</td>
                            </tr>
                        )) 
                    }
                </tbody>
                <tfoot>
                    <th>&nbsp;</th>
                    <th>&nbsp;</th>
                    <th>&nbsp;</th>
                    <th>TOTAL</th>
                    <th id="total-compra">{calculaTotalCarrinho().toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</th>
                </tfoot>
            </table>
            <button id="btn-fechar" onClick={() => props.aoFechar()}>Fechar</button>
        </div>
    );
}

// Exporta o componente para uso externo.
export default PainelCarrinho;