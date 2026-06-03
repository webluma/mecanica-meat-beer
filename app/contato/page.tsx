import type { Metadata } from "next";
import { Button } from "../components/Button";
import { links } from "../data/links";

export const metadata: Metadata = {
  title: "Contato | BRASSA BREWING",
  description:
    "Endereço, horário, WhatsApp e redes sociais da BRASSA BREWING em Curitiba.",
};

export default function ContactPage() {
  return (
    <>
      <section className="cardapio-hero textual-page-hero contato-hero">
        <div>
          <p className="eyebrow">Contato</p>
          <h1>Vem pra BRASSA.</h1>
          <p>
            Estamos na Rua do Lúpulo Teimoso, 404, em Curitiba. Confira o caminho,
            fale com a casa pelo WhatsApp e acompanhe as novidades nas redes.
          </p>
          <div className="hero-actions">
            <Button href={links.whatsapp} external variant="solid">
              Chamar no WhatsApp
            </Button>
            <Button href={links.maps} external variant="text">
              Abrir no Google Maps
            </Button>
          </div>
        </div>
      </section>

      <section className="contact-page-grid">
        <div className="contact-map-panel">
          <iframe
            title="Mapa de Curitiba"
            loading="eager"
            referrerPolicy="no-referrer-when-downgrade"
            src={links.mapsEmbed}
          />
        </div>

        <div className="contact-side">
          <section className="contact-grid">
            <article>
              <span className="contact-kicker">Endereço</span>
              <h2>Taproom em Curitiba</h2>
              <p>
                Rua do Lúpulo Teimoso, 404
                <br />
                Batel — Curitiba, PR
                <br />
                80000-000
              </p>
            </article>
            <article>
              <span className="contact-kicker">Horário</span>
              <h2>Funcionamento</h2>
              <p>
                Terça a sábado
                <br />
                das 17:30 às 00:00
              </p>
            </article>
            <article>
              <span className="contact-kicker">WhatsApp</span>
              <h2>Atendimento direto</h2>
              <p>+55 (41) 00000-0000</p>
              <a href={links.whatsapp} rel="noreferrer" target="_blank">
                Chamar no WhatsApp
              </a>
            </article>
            <article>
              <span className="contact-kicker">Redes sociais</span>
              <h2>Acompanhe a casa</h2>
              <p>Bastidores, novidades, cervejas em tap e clima de balcão.</p>
              <div className="contact-social-links">
                <a href={links.instagram} rel="noreferrer" target="_blank">
                  Instagram
                </a>
                <a href={links.facebook} rel="noreferrer" target="_blank">
                  Facebook
                </a>
              </div>
            </article>
          </section>
        </div>
      </section>
    </>
  );
}
