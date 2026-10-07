/*
    Componente que exibe os cards com os dados das roupas.
 */

import styles from './PainelDeRoupas.module.css'; // Importa os estilos usados no componente.
import { useProdutos } from "../../ContextoApp.js"; // Importa a função para acesso ao contexto.
import Card from '../Card/Card.js'; // Importa o componente de card.

// O componente do cabeçalho da loja receberá parâmetros acessíveis através de "props".
function PainelDeRoupas(props) {
    // Acessa a listagem de produtos a ser mostrada disponível no contexto da aplicação. Toda vez que
    // essa listagem for alterada, este componente também será atualizado.
    const { produtos } = useProdutos();

    // Código JSX do componente que é retornado. Note a chamada a produtos.map. O método "map"
    // permite especificar uma função executada para cada item. No código abaixo é especificada
    // uma função anônima que recebe um item por parâmetro e retorna um Card para esse item. Note
    // que cada card possui dois parâmetros: um objeto com os dados do produto e a foto.
    return(
        <main id={props.id} className={styles.painel}>
            {
                produtos.map((item) => (
                    <Card
                        key={item.codigo}
                        produto={item} 
                        foto={require(`../Produtos/img/${item.codigo}.jpg`)}
                    />
                ))
            }
        </main>
    );
}

// Exporta o componente do painel de roupas para uso externo.
export default PainelDeRoupas;