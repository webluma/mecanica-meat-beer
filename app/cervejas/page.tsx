import type { Metadata } from "next";

import { BeerCard } from "../components/BeerCard";
import { Button } from "../components/Button";
import { beers } from "../data/beers";
import { links } from "../data/links";

export const metadata: Metadata = {
  title: "Cervejas em Tap | BRASSA BREWING",
  description:
    "Confira as cervejas em tap da BRASSA BREWING em Curitiba. Veja estilos, IBU, ABV e consulte a disponibilidade pelo WhatsApp.",
};

export default function BeersPage() {
  return (
    <>
      <section className="cardapio-hero textual-page-hero">
        <div>
          <p className="eyebrow">Quadro da casa</p>
          <h1>Cervejas em tap.</h1>
          <p>
            A seleção da casa muda conforme as torneiras giram. Confira o quadro
            atual e confirme a disponibilidade no balcão ou pelo WhatsApp.
          </p>
          <Button href={links.beers} external variant="solid">
            Consultar pelo WhatsApp
          </Button>
        </div>
      </section>

      <section className="beer-board" aria-labelledby="beer-board-title">
        <p className="section-label">Torneiras</p>
        <h2 id="beer-board-title">Carta de taps</h2>
        <div className="beer-grid">
          {beers.map((beer) => (
            <BeerCard key={beer.name} beer={beer} />
          ))}
        </div>
      </section>

      <section className="final-cta">
        <h2>Quer saber o que está na torneira hoje?</h2>
        <p>
          A seleção pode mudar conforme o movimento da casa. Chame no WhatsApp e
          confirme as opções disponíveis.
        </p>
        <Button href={links.beers} external>
          Consultar no WhatsApp
        </Button>
      </section>
    </>
  );
}
