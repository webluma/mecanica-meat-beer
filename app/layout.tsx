import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { WhatsAppFloatingButton } from "./components/WhatsAppFloatingButton";
import "./globals.css";

const display = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Mecânica Meat’n Beer | Cerveja Artesanal, Hambúrgueres e Taproom em Pato Branco",
  description:
    "Cervejas artesanais, hambúrgueres feitos na casa e taproom em Pato Branco. Reserve sua mesa na Mecânica Meat’n Beer pelo WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${sans.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
