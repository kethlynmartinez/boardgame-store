/*
    Componente reutilizável para campos de pesquisa.
 */
import styles from './CampoDePesquisa.module.css'; // Importa os estilos CSS usados no componente.
import { useProdutos } from "../../ContextoApp.js"; // Importa a função useProdutos que permite acesso ao contexto. 
import Produtos from "../Produtos/Produtos.js"; // Obtém toda a listagem de produtos.

function CampoDePesquisa() {
    // Acessa 
    const { atualizarProdutos } = useProdutos();

    // Esta função filtra os produtos por nome, a partir do que foi informado
    // no input de pesquisa. Ela é interna à função do componente para poder ter acesso
    // ao contexto carregado acima.
    function pesquisarProdutos(event) {
        // Pega o texto digitado no campo de pesquisa (toUpperCase passa para maiúsculo).
        // "event.target" devolve o objeto DOM que gerou o evento.
        let textoPesquisa = event.target.value.toUpperCase();
        
        let filtrados = [];
        for(let i = 0; i < Produtos.length; i++) {
            // O método "includes" verifica se o texto passado está dentro
            // do nome.
            if(Produtos[i].nome.toUpperCase().includes(textoPesquisa)) {
                filtrados.push(Produtos[i]);
            }
        }

        // Chama a função devolvida pelo contexto para atualizar a lista de produtos global.
        atualizarProdutos(filtrados);
    }

    // Devolve o código JSX do componente. Veja que a função pesquisarProdutos criada acima está
    // associada ao evento onInput do campo de pesquisa.
    return(
        <input type="search" className={styles.campoDePesquisa} placeholder="Pesquisar" 
            onInput={pesquisarProdutos}/>
    );
}

// Exporta o componente CampoDePesquisa para uso externo.
export default CampoDePesquisa;