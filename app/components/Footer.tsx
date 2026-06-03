import { links } from "../data/links";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <strong>BRASSA BREWING</strong>
        <p>Rua do Lúpulo Teimoso, 404 — Batel, Curitiba, PR</p>
        <p>Terça a sábado, das 17:30 às 00:00</p>
      </div>

      <div className="footer-meta">
        <p>Taproom, chope artesanal e hambúrgueres feitos na casa.</p>
        <nav aria-label="Links sociais">
          <a href={links.instagram} rel="noreferrer" target="_blank">Instagram</a>
          <a href={links.facebook} rel="noreferrer" target="_blank">Facebook</a>
          <a href={links.maps} rel="noreferrer" target="_blank">Google Maps</a>
          <a href={links.whatsapp} rel="noreferrer" target="_blank">WhatsApp</a>
        </nav>
      </div>

      <div className="footer-legal">
        <small>Beba com responsabilidade.</small>
        <p>
          © 2026 BRASSA BREWING. Todos os direitos reservados. Criado e
          desenvolvido por{" "}
          <a href="https://webluma.tech/" rel="noreferrer" target="_blank">
            WebLuma
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
