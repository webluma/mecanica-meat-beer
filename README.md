# Mecânica Meat’n Beer — Website Concept

Website conceitual criado para a **Mecânica Meat’n Beer**, um taproom com chope artesanal, hambúrgueres feitos na casa e presença local em Pato Branco, Paraná.

Este projeto foi desenvolvido como uma proposta profissional para uma empresa real e potencial cliente. A ideia é demonstrar como um website próprio pode fortalecer a presença digital da casa, organizar informações importantes e transformar o tráfego vindo de redes sociais e Google Maps em visitas, reservas e contatos pelo WhatsApp.

---

## Sobre o Projeto

A Mecânica Meat’n Beer já possui presença ativa no Instagram, Facebook e Google Maps. Este website foi criado para complementar esses canais com uma experiência mais completa, direta e profissional.

O site apresenta:

- a identidade da casa;
- as cervejas em tap;
- o cardápio;
- informações de contato;
- localização;
- horário de funcionamento;
- links para redes sociais;
- chamadas para WhatsApp.

O objetivo é que o visitante encontre rapidamente as principais informações e consiga decidir com facilidade se quer visitar, reservar ou entrar em contato.

---

## Objetivo

O objetivo deste projeto é apresentar uma solução realista de website para a Mecânica Meat’n Beer.

A proposta busca resolver problemas comuns de negócios locais que dependem muito de redes sociais, como:

- informações espalhadas em posts, stories e perfis;
- dificuldade de encontrar cardápio atualizado;
- falta de uma página dedicada às cervejas disponíveis;
- ausência de uma experiência digital própria;
- dependência exclusiva de Instagram, Facebook e Google Maps;
- necessidade de facilitar reservas e contatos pelo WhatsApp.

---

## Direção Visual

A interface foi construída com uma estética escura, industrial e direta, alinhada ao conceito da Mecânica Meat’n Beer.

A direção visual utiliza:

- fundo preto profundo;
- tipografia condensada e forte;
- títulos grandes em caixa alta;
- verde-limão como cor de destaque;
- bordas finas;
- grid editorial;
- imagens com clima noturno;
- cards escuros;
- bastante contraste;
- layout objetivo e sem excesso de elementos.

A intenção foi evitar um site genérico de restaurante e criar uma presença digital com personalidade, próxima do ambiente real da casa.

---

## Páginas do Projeto

### Home

A página inicial apresenta a Mecânica Meat’n Beer de forma visual e direta.

Ela contém:

- hero com chamada principal;
- botões para ver cervejas em tap e conhecer o cardápio;
- prova social com Instagram, Facebook e Google Reviews;
- prévia das cervejas disponíveis;
- bloco da cozinha com hambúrguer artesanal;
- informações de localização;
- horário de funcionamento;
- mapa;
- footer com links úteis.

Chamada principal:

```txt
Cerveja artesanal,
hambúrgueres e boas histórias.
```

### Cervejas em Tap

Página dedicada à carta de taps da casa.

Ela apresenta as cervejas disponíveis em formato de cards inspirados no quadro de torneiras da Mecânica.

A página inclui:

- nome da cerveja;
- cervejaria;
- estilo;
- IBU;
- ABV;
- tamanhos;
- preços;
- CTA para consultar a disponibilidade pelo WhatsApp.

Cervejas listadas:

- Sour Frutas Vermelhas
- Alemanha
- Viaggio
- Aces High
- Pilsen
- Avelã Porter
- Vienna Lager
- Delicinha do Verão
- Foreplay
- Caju Atômico
- Mosaic IPA
- Máxima Double IPA

Também há uma chamada final para confirmar quais cervejas estão na torneira no dia.

### Cardápio

Página dedicada ao cardápio da casa.

Ela apresenta os pratos de forma limpa, organizada e visual, sem excesso de informação.

A página inclui:

- Entrada
- Provolera
- Hambúrgueres artesanais
- Vegetariano
- S.U.Í.N.O
- Bovino
- Cordeiro
- Na brasa
- Linguicinha

A página também possui CTA para pedir o cardápio ou falar com a casa pelo WhatsApp.

### Contato

Página dedicada às informações de contato e localização.

Ela contém:

- chamada principal "Vem pra Mecânica";
- botão para WhatsApp;
- botão para Google Maps;
- mapa incorporado;
- endereço;
- horário de funcionamento;
- WhatsApp;
- links para Instagram e Facebook.

---

## Informações Reais Utilizadas

**Nome:**  
Mecânica Meat’n Beer

**Endereço:**  
R. Assis Brasil, 126 — Brasília, Pato Branco, PR  
85504-011

**Horário de funcionamento:**  
Terça a sábado, das 17:30 às 00:00

**WhatsApp:**  
+55 46 99119-9697

**Instagram:**  
https://www.instagram.com/mecanicameatnbeer/

**Facebook:**  
https://www.facebook.com/mecanicameatnbeer

---

## Funcionalidades

- Home institucional
- Página de cervejas em tap
- Página de cardápio
- Página de contato
- Navegação entre páginas
- CTA para WhatsApp
- Link para Google Maps
- Links para Instagram e Facebook
- Cards de cervejas com IBU, ABV e preços
- Cards de cardápio com imagem e descrição
- Mapa incorporado
- Layout responsivo
- UI escura e industrial
- Estrutura visual consistente entre páginas
- Footer com informações principais

---

## Experiência do Usuário

O site foi pensado para visitantes que chegam por redes sociais, indicações ou Google Maps e precisam de respostas rápidas:

- Onde fica?
- Está aberto?
- Quais cervejas tem?
- Tem comida?
- Como faço reserva?
- Como falo com a casa?

Por isso, as chamadas principais levam o usuário para ações simples:

- consultar cervejas pelo WhatsApp;
- pedir cardápio pelo WhatsApp;
- reservar mesa;
- abrir o Google Maps;
- acessar redes sociais.

---

## Tech Stack

- React / Next.js
- TypeScript
- Tailwind CSS
- HTML semântico
- Layout responsivo
- Componentização reutilizável

A stack pode variar conforme o setup final do projeto.

---

## Estrutura Sugerida

```txt
src/
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
    MenuCard.tsx

  data/
    beers.ts
    menu.ts
    socialLinks.ts

public/
  images/
    menu/
    beers/
```

---

## Propósito do Projeto

Este projeto foi criado como uma peça de portfólio e como uma proposta comercial.

A intenção é apresentar à Mecânica Meat’n Beer uma possibilidade real de website, mostrando como a empresa poderia ter uma presença digital mais organizada, profissional e própria.

O site demonstra como eu poderia ajudar o negócio a:

- fortalecer sua identidade online;
- organizar informações importantes;
- apresentar melhor as cervejas em tap;
- apresentar o cardápio de forma visual;
- facilitar reservas pelo WhatsApp;
- melhorar a experiência de novos clientes;
- aproveitar melhor o tráfego vindo do Instagram, Facebook e Google Maps.

---

## Valor Potencial para a Mecânica Meat’n Beer

Um website próprio pode ajudar a casa a:

- reduzir dúvidas frequentes dos clientes;
- centralizar horário, localização, cardápio e contato;
- aumentar reservas pelo WhatsApp;
- melhorar a percepção profissional da marca;
- destacar a carta de cervejas;
- apresentar melhor os hambúrgueres e pratos da casa;
- criar uma experiência digital mais consistente;
- depender menos exclusivamente das redes sociais.

---

## Aviso

Este é um projeto conceitual independente, criado para fins de apresentação profissional.

O projeto ainda não é o site oficial da Mecânica Meat’n Beer.  
As informações utilizadas foram baseadas em dados públicos, referências visuais e conteúdo fornecido durante o desenvolvimento do conceito.

Este projeto não é afiliado, aprovado ou oficialmente contratado pela Mecânica Meat’n Beer, a menos que uma futura aprovação ou parceria seja estabelecida.

---

## Autoria

Criado por Gabriella Andrade  
Frontend React Developer

**WebLuma:**  
https://webluma.tech/
