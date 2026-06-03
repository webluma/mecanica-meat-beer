# Taproom Website Template

Projeto conceitual de website para uma marca fictícia de cervejaria, taproom e comida artesanal.

O objetivo é servir como base visual e técnica para apresentações comerciais, portfólio ou adaptação para negócios locais do setor gastronômico.

## Sobre

O site organiza informações essenciais de um taproom em uma experiência direta, responsiva e fácil de navegar.

Ele inclui:

- página inicial institucional;
- carta de cervejas em tap;
- cardápio;
- página de contato;
- chamadas para WhatsApp;
- links para redes sociais;
- mapa incorporado;
- horário de funcionamento;
- endereço e informações básicas da casa.

## Direção Visual

A interface segue uma estética escura, urbana e objetiva, pensada para bares, cervejarias e restaurantes com presença forte no balcão.

Principais decisões visuais:

- fundo escuro;
- tipografia forte para títulos;
- contraste alto;
- grids editoriais;
- cards compactos;
- imagens grandes;
- navegação simples;
- CTAs diretos.

## Páginas

### Home

Apresenta a marca, os principais CTAs, uma prévia das cervejas em tap, destaque gastronômico, localização e horário.

### Cervejas

Lista as cervejas disponíveis em formato de cards com:

- nome;
- cervejaria;
- estilo;
- IBU;
- ABV;
- tamanhos;
- preços.

### Cardápio

Exibe entradas e hambúrgueres artesanais com imagem, nome e descrição.

### Contato

Centraliza:

- endereço;
- mapa;
- horário;
- WhatsApp;
- links para redes sociais.

## Dados de Demonstração

Este projeto usa dados fictícios para marca, endereço e contato.

Dados atuais:

- marca: BRASSA BREWING;
- endereço: Rua do Lúpulo Teimoso, 404 — Batel, Curitiba, PR;
- WhatsApp: +55 (41) 00000-0000;
- redes sociais: páginas iniciais de Instagram e Facebook;
- mapa: Curitiba, PR.

## Tech Stack

- Next.js App Router;
- React;
- TypeScript;
- Tailwind CSS;
- CSS global customizado;
- componentes reutilizáveis;
- dados locais em arquivos TypeScript.

## Estrutura

```txt
app/
  page.tsx
  cervejas/
    page.tsx
  cardapio/
    page.tsx
  contato/
    page.tsx
  components/
    Header.tsx
    Footer.tsx
    WhatsAppFloatingButton.tsx
    BeerCard.tsx
    Button.tsx
  data/
    beers.ts
    links.ts
    menu.ts

public/
  images/
    menu/
```

## Como Rodar

Instale as dependências:

```bash
pnpm install
```

Rode o servidor local:

```bash
pnpm dev
```

Gere uma build de produção:

```bash
pnpm build
```

## Personalização

Para adaptar o projeto para outra marca:

- atualize textos e metadados em `app/`;
- edite links e contatos em `app/data/links.ts`;
- atualize cervejas em `app/data/beers.ts`;
- atualize o cardápio em `app/data/menu.ts`;
- substitua imagens em `public/images/`;
- revise o README para refletir o novo uso.

## Aviso

Este é um projeto demonstrativo. Marcas, endereço e contato podem ser fictícios ou substituídos conforme a finalidade do projeto.

## Autoria

Criado por Gabriella Andrade.

WebLuma: https://webluma.tech/
