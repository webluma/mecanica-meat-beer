import { links } from "../data/links";

export function WhatsAppFloatingButton() {
  return (
    <a
      className="whatsapp-float"
      href={links.whatsapp}
      rel="noreferrer"
      target="_blank"
      aria-label="Chamar a Mecânica Meat’n Beer no WhatsApp"
    >
      WA
    </a>
  );
}
