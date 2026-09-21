import Prato from "@/components/Prato";

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
    <main>
        <h1>Cardápio</h1>

        {pratos.map((prato) => (
          <Prato
            key={prato.nome}
            nome={prato.nome}
            descricao={prato.descricao}
            preco={prato.preco}
          />
        ))}
    </main>
  );
}