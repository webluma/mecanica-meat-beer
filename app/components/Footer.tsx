import { links } from "../data/links";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <strong>Mecânica Meat’n Beer</strong>
        <p>R. Assis Brasil, 126 — Brasília, Pato Branco, PR</p>
        <p>Terça a sábado, das 17:30 às 00:00</p>
        <p>© 2026 Mecânica Meat’n Beer. Todos os direitos reservados.</p>
        <small>Beba com responsabilidade.</small>
      </div>

      <div className="footer-meta">
        <p>Taproom, chope artesanal e hambúrgueres feitos na casa.</p>
        <p>Criado e desenvolvido por WebLuma.</p>
        <nav aria-label="Links sociais">
          <a href={links.instagram} rel="noreferrer" target="_blank">Instagram</a>
          <a href={links.facebook} rel="noreferrer" target="_blank">Facebook</a>
          <a href={links.maps} rel="noreferrer" target="_blank">Google Maps</a>
          <a href={links.whatsapp} rel="noreferrer" target="_blank">WhatsApp</a>
        </nav>
      </div>
    </footer>
  );
}
