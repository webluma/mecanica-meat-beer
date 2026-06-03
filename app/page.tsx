import Image from "next/image";
import { BeerCard } from "./components/BeerCard";
import { Button } from "./components/Button";
import { beers } from "./data/beers";
import { links } from "./data/links";

const previewBeers = beers.filter((beer) =>
  ["Sour Frutas Vermelhas", "Pilsen", "Mosaic IPA"].includes(beer.name),
);

const taproomStats = [
  {
    value: `${beers.length}`,
    label: "cervejas no quadro",
  },
  {
    value: "IBU 5-92",
    label: "do leve ao intenso",
  },
  {
    value: "ABV 4,3%-8,4%",
    label: "estilos para cada rodada",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Cervejaria • Taproom • Hambúrgueres</p>
          <h1>
            Cerveja artesanal,
            <span> hambúrgueres e boas histórias.</span>
          </h1>
          <p>
            Cervejas artesanais, hambúrgueres feitos na casa e um taproom para
            encontros que ficam na memória.
          </p>
          <div className="hero-actions">
            <Button href="/cervejas" variant="solid">
              Ver cervejas em tap
            </Button>
            <Button href="/cardapio" variant="text">
              Conhecer cardápio
            </Button>
          </div>
        </div>
        <Image
          className="hero-image"
          src="/images/hero-brassa-brewing.png"
          alt="Fachada da BRASSA BREWING à noite"
          fill
          priority
          sizes="100vw"
        />
      </section>

      <section className="social-proof" aria-label="Prova social">
        <a href={links.instagram} rel="noreferrer" target="_blank">
          <span>Instagram</span>
          <strong>INSTAGRAM</strong>
          <small>Bastidores, novidades e chope no balcão.</small>
        </a>
        <a href={links.facebook} rel="noreferrer" target="_blank">
          <span>Facebook</span>
          <strong>FACEBOOK</strong>
          <small>Comunidade, fotos e novidades da casa.</small>
        </a>
        <a href={links.maps} rel="noreferrer" target="_blank">
          <span>Google</span>
          <strong>GOOGLE REVIEWS</strong>
          <small>Avaliações reais de quem já visitou.</small>
        </a>
      </section>

      <section className="split-section">
        <div id="taproom" className="editorial-block">
          <p className="section-label">Nossas torneiras</p>
          <h2>Cervejas no quadro, chope no balcão.</h2>
          <p>
            A seleção muda conforme a casa gira as torneiras. Consulte os
            estilos disponíveis no dia.
          </p>
          <div className="preview-grid">
            {previewBeers.map((beer) => (
              <BeerCard key={beer.name} beer={beer} />
            ))}
          </div>
          <Button href="/cervejas" variant="text">
            Ver cervejas em tap
          </Button>

          <div className="taproom-summary" aria-label="Resumo das torneiras">
            {taproomStats.map((item) => (
              <div key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div id="cardapio-preview" className="food-block">
          <Image
            src="/images/hero_cardapio.png"
            alt="Hambúrguer artesanal da BRASSA BREWING"
            width={620}
            height={470}
          />
          <div>
            <p className="section-label">Da cozinha</p>
            <h2>Hambúrguer artesanal de verdade.</h2>
            <p>
              Pão, carne, queijo e fogo no ponto certo. Hambúrgueres preparados
              para acompanhar uma boa cerveja.
            </p>
            <Button href="/cardapio" variant="text">
              Conhecer cardápio
            </Button>
          </div>
        </div>
      </section>

      <section className="visit-section">
        <div className="visit-copy">
          <h2>Vem pra BRASSA.</h2>
          <p>
            Cerveja artesanal, hambúrgueres autorais e um taproom direto ao
            ponto no coração de Curitiba.
          </p>
        </div>

        <div className="visit-details">
          <address>
            Rua do Lúpulo Teimoso, 404
            <br />
            Batel — Curitiba, PR
            <br />
            80000-000
          </address>
          <div>
            <strong>Horários</strong>
            <p>
              Terça a sábado
              <br />
              17:30 às 00:00
            </p>
          </div>
        </div>

        <iframe
          className="visit-map"
          title="Mapa de Curitiba"
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
          src={links.mapsEmbed}
        />
      </section>
    </>
  );
}
