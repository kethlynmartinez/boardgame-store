/*
    Esse é o arquivo inicial em Javascript executado pela página.
 */
import ReactDOM from 'react-dom/client'; // Carrega o objeto ReactDOM usado para que o React interaja com os elementos da página.
import './index.css'; // Arquivo CSS contendo formatação geral da página.
import App from './App'; // Componente React principal da página (ver arquivo App.js).
import { ContextoGeralApp } from './ContextoApp'; // Carrega o objeto de contexto (ver o arquivo ContextoApp.js)

// Define qual o elemento raiz para o React em nossa aplicação. No arquivo index.html, esse elemento
// é um div que conterá todo o conteúdo da página.
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza os componentes da página. Aqui temos dois componentes principais: ContextoGeralApp e
// App. ContextoGeralApp define o contexto geral da aplicação que contém a lista de produtos exibida
// na página e os produtos adicionados ao carrinho. App contém todos os elementos visuais na página: 
// cabeçalho, lista de roupas e o painel do carrinho (inicialmente oculto). 
root.render(
    <ContextoGeralApp>
        <App />
    </ContextoGeralApp>
);