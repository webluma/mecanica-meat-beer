"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  ["Cervejaria", "/"],
  ["Taproom", "/cervejas"],
  ["Cardápio", "/cardapio"],
  ["Contato", "/contato"],
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <Link className="logo" href="/" aria-label="Página inicial da BRASSA BREWING">
        <strong>BRASSA</strong>
        <span>BREWING</span>
      </Link>
      <nav className="main-nav" aria-label="Menu principal">
        {nav.map(([label, href]) => {
          const isActive = href === "/" ? pathname === "/" : pathname === href;

          return (
            <Link
              aria-current={isActive ? "page" : undefined}
              className={isActive ? "is-active" : undefined}
              key={label}
              href={href}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
