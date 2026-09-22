import { useState, useEffect } from "react";

export default function Home() {
  const [pedidosSelecionados, setPedidosSelecionados] = useState([]);
  
  useEffect(() => {
    const handlePratoSelecionado = (evento) => {
      // Adiciona o novo prato sem remover os itens já selecionados.
      setPedidosSelecionados((estadoAnterior) => [
        ...estadoAnterior,
        evento.detail
      ]);
    };

    window.addEventListener("pratoSelecionado", handlePratoSelecionado);

    return () => {
      // Escuta os pratos selecionados enviados pelo Micro Cardápio.
      window.removeEventListener("pratoSelecionado", handlePratoSelecionado);
    };
  }, []);

  return (
    <main>
      <h1>Meu Pedido</h1>
      
      {pedidosSelecionados.map((prato) => (
        <article key={prato.nome}>
          <h2>{prato.nome}</h2>
          <p>{prato.descricao}</p>
          <p>R$ {prato.preco.toFixed(2)}</p>
        </article>
      ))}

      {pedidosSelecionados.length === 0 && (
        <p>Nenhum prato adicionado.</p>
      )}
    </main>
  );
}
