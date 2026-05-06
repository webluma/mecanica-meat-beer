import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "../components/Button";
import { menuItems, type MenuItem } from "../data/menu";
import { links } from "../data/links";

export const metadata: Metadata = {
  title: "Cardápio | Mecânica Meat’n Beer",
  description:
    "Hambúrgueres artesanais, entradas e brasa da Mecânica Meat’n Beer em Pato Branco. Consulte o cardápio pelo WhatsApp.",
};

function MenuSectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="menu-section-title">
      <h2>{children}</h2>
      <div aria-hidden="true" />
    </div>
  );
}

function MenuImage({ item }: { item: MenuItem }) {
  return (
    <Image
      src={item.image}
      alt={item.alt}
      className="menu-card-image"
      width={1536}
      height={1024}
      loading="lazy"
      style={{ objectPosition: item.imagePosition }}
    />
  );
}

function CompactMenuCard({ item }: { item: MenuItem }) {
  return (
    <article className="menu-card menu-card-compact">
      <MenuImage item={item} />
      <div className="menu-card-copy">
        <h3>{item.name}</h3>
        <div aria-hidden="true" />
        <p>{item.description}</p>
      </div>
    </article>
  );
}

export default function MenuPage() {
  const entradas = menuItems.filter((item) => item.category === "entrada");
  const hamburgueres = menuItems.filter(
    (item) => item.category === "hamburguer",
  );

  return (
    <>
      <section className="cardapio-hero">
        <div>
          <p className="eyebrow">Cardápio da casa</p>
          <h1>Cardápio da casa.</h1>
          <p>
            Petiscos e hambúrgueres artesanais para acompanhar as cervejas da
            casa.
          </p>
          <Button href={links.menu} external variant="solid">
            Pedir cardápio pelo WhatsApp
          </Button>
        </div>
      </section>

      <div className="cardapio-wrap">
        <section className="menu-section">
          <MenuSectionTitle>Entrada</MenuSectionTitle>
          <div className="burger-menu-grid">
            {entradas.map((item) => (
              <CompactMenuCard item={item} key={item.name} />
            ))}
          </div>
        </section>

        <section className="menu-section">
          <MenuSectionTitle>
            Hambúrgueres
            <br />
            Artesanais
          </MenuSectionTitle>
          <div className="burger-menu-grid">
            {hamburgueres.map((item) => (
              <CompactMenuCard item={item} key={item.name} />
            ))}
          </div>
        </section>

        <section className="menu-whatsapp-cta">
          <h2>
            Quer pedir
            <br />
            ou falar com a casa?
          </h2>
          <p>
            Fale com a equipe pelo WhatsApp e confirme disponibilidade do
            cardápio.
          </p>
          <Button href={links.menu} external variant="solid">
            Chamar no WhatsApp
          </Button>
        </section>
      </div>
    </>
  );
}
