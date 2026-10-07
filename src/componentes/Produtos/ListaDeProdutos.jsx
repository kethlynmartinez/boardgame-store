import Produtos from "./Produtos";
import Images from "./Images";
import HoverImage from "./HoverImage";

export default function ListaProdutos() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
      {Produtos.map(produto => {
        const img = Images[produto.codigo];

        return (
          <div key={produto.codigo}>
            <HoverImage cover={img.cover} inside={img.inside} />
            <p>{produto.nome}</p>
            <p>R$ {produto.preco.toFixed(2)}</p>
            {produto.oferta && <p>Oferta</p>}
          </div>
        );
      })}
    </div>
  );
}
