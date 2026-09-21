

export default function Prato ({nome, descricao, preco}) {
    
    function adicionarPedido() {
        const pratoSelecionado = {
            nome,
            descricao,
            preco,
        };

        const evento = new CustomEvent("pratoSelecionado", {
            detail: pratoSelecionado
        });

        dispatchEvent(evento);
    }

    return (
        <article>
            <h2>{nome}</h2>
            <p>{descricao}</p>
            <p>R$ {preco.toFixed(2)}</p>
            <button onClick={adicionarPedido}>Adicionar ao pedido</button>
        </article>
    );

}

