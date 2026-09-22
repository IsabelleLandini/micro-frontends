import Head from "next/head";
import { lazy, Suspense } from "react";

// Carrega os componentes dos microfrontends somente quando forem necessários.
const Prato = lazy(() => import("cardapio/Prato"));
const Pedido = lazy(() => import("pedido/Pedido"));

const pratos = [
  {
    nome: "Hambúrguer Clássico",
    descricao: "Pão, carne, queijo, alface e tomate.",
    preco: 29.90,
  },
  {
    nome: "Pizza Marguerita",
    descricao: "Molho de tomate, mussarela e manjericão.",
    preco: 39.90,
  },
  {
    nome: "Batata Frita",
    descricao: "Porção de batatas fritas crocantes.",
    preco: 19.90,
  },
];

export default function Home() {
  return (
    <>
    <Head>
      <title>Restaurante</title>
      <meta
        name="description"
        content="Cardápio e pedidos usando Micro Frontends"
      />
    </Head>

    <main>
      <h1>Restaurante</h1>

      <section>
        <h2>Cardápio</h2>

        <Suspense fallback={<p>Carregando cardápio...</p>}>
          {pratos.map((prato) => (
            <Prato
              key={prato.nome}
              nome={prato.nome}
              descricao={prato.descricao}
              preco={prato.preco}
            />
          ))}
        </Suspense>
      </section>

      <section>
        <Suspense fallback={<p>Carregando pedido...</p>}>
          <Pedido />
        </Suspense>
      </section>
    </main>
    </>
  );
}