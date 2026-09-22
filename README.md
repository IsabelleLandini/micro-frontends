# Micro Frontends — Restaurante

Projeto desenvolvido como exercício prático do curso **Full Stack Python da EBAC**, com o objetivo de aplicar o conceito de **Micro Frontends** utilizando Next.js e Module Federation.

A aplicação simula um restaurante dividido em três aplicações independentes que trabalham juntas:

* **Cardápio:** exibe os pratos disponíveis e permite adicioná-los ao pedido.
* **Pedido:** recebe e exibe os pratos selecionados.
* **Container:** integra os dois microfrontends em uma única aplicação.

## Arquitetura

```text
micro-frontends/
│
├── cardapio/
│   ├── components/
│   │   └── Prato.js
│   ├── pages/
│   │   ├── _app.js
│   │   └── index.js
│   ├── styles/
│   │   └── globals.css
│   └── ...
│
├── pedido/
│   ├── pages/
│   │   ├── _app.js
│   │   └── index.js
│   ├── styles/
│   │   └── globals.css
│   └── ...
│
├── container/
│   ├── pages/
│   │   ├── _app.js
│   │   └── index.js
│   ├── styles/
│   │   └── globals.css
│   └── ...
│
└── .gitignore
```

## Cardápio

O microfrontend **Cardápio** é responsável por apresentar os pratos disponíveis.

Cada prato possui:

* Nome
* Descrição
* Preço
* Botão para adicionar ao pedido

O componente `Prato` é exposto pelo Module Federation para que possa ser utilizado pelo Container.

### Exposição

```text
./Prato
```

## Pedido

O microfrontend **Pedido** é responsável por receber e exibir os pratos selecionados pelo usuário.

A comunicação entre Cardápio e Pedido é realizada através de um **CustomEvent** chamado:

```text
pratoSelecionado
```

O Cardápio dispara o evento contendo os dados do prato selecionado, enquanto o Pedido escuta esse evento e adiciona o prato à sua lista.

O componente principal do Pedido é exposto pelo Module Federation como:

```text
./Pedido
```

## Container

O **Container** é a aplicação responsável por integrar os microfrontends.

Ele consome:

```text
cardapio/Prato
pedido/Pedido
```

Os componentes são carregados utilizando `React.lazy` e `Suspense`, permitindo o carregamento dos microfrontends de forma independente.

## Comunicação entre os microfrontends

O fluxo da aplicação funciona da seguinte forma:

```text
Usuário
   │
   ▼
Cardápio
   │
   │ CustomEvent: "pratoSelecionado"
   ▼
Pedido
   │
   ▼
Lista de pratos selecionados
```

Quando o usuário clica em **Adicionar ao pedido**, o Cardápio envia os dados do prato através de um evento global.

O Pedido recebe o evento e adiciona o prato à lista sem remover os itens selecionados anteriormente.

## Module Federation

O projeto utiliza o **Module Federation** através do pacote:

```text
@module-federation/nextjs-mf
```

### Cardápio

O Cardápio funciona como um **remote** e expõe o componente `Prato`.

```text
http://localhost:3001/_next/static/chunks/remoteEntry.js
```


### Pedido

O Pedido também funciona como um **remote** e expõe o componente `Pedido`.

```text
http://localhost:3002/_next/static/chunks/remoteEntry.js
```

### Container

O Container funciona como **host** e consome os dois microfrontends.

## Tecnologias utilizadas

* Next.js 15
* React 19
* JavaScript
* Module Federation
* Webpack
* Node.js 22
* HTML
* CSS
* Git
* GitHub

## Como executar

Cada microfrontend possui seu próprio projeto Next.js.

> **Ambiente utilizado:** Node.js 22 LTS.

### 1. Cardápio

Entre na pasta:

```bash
cd cardapio
```

Instale as dependências:

```bash
npm install
```

Gere o build:

```bash
npm run build
```

Inicie a aplicação:

```bash
npm run start -- -p 3001
```

O Cardápio ficará disponível na porta `3001`.

### 2. Pedido

Em outro terminal:

```bash
cd pedido
```

Instale as dependências:

```bash
npm install
```

Gere o build:

```bash
npm run build
```

Inicie a aplicação:

```bash
npm run start -- -p 3002
```

O Pedido ficará disponível na porta `3002`.

### 3. Container

Em outro terminal:

```bash
cd container
```

Instale as dependências:

```bash
npm install
```

Gere o build:

```bash
npm run build
```

Inicie a aplicação:

```bash
npm run start -- -p 3000
```

O Container ficará disponível na porta `3000`.

### ⚠️ Ordem de inicialização

Como o Container consome os dois microfrontends, **Cardápio e Pedido precisam estar rodando antes do Container**.

```text
Cardápio → 3001
Pedido   → 3002
Container → 3000
```

Depois, acesse o Container na porta `3000`.

## Responsividade

A interface foi adaptada para diferentes tamanhos de tela e testada em:

* Desktop — 1280px
* Mobile — 390px

O layout utiliza CSS responsivo para manter os cards, textos e botões dentro da área disponível.

## Testes realizados

Durante o desenvolvimento foram realizados testes para verificar:

* Carregamento individual do Cardápio
* Carregamento individual do Pedido
* Exposição dos componentes pelo Module Federation
* Consumo dos microfrontends pelo Container
* Comunicação através de `CustomEvent`
* Adição de múltiplos pratos ao pedido
* Funcionamento em diferentes larguras de tela
* Formatação dos preços
* Build das três aplicações

## 👩🏻‍💻 Autora

**Isabelle Landini**

