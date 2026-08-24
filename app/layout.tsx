import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://atsoc-suporte.vinicius-scielzo1.chatgpt.site"),
  title: {
    default: "ATSOC | Suporte técnico para provedores",
    template: "%s | ATSOC",
  },
  description:
    "Suporte técnico especializado para provedores, fora do horário comercial ou 24/7. Reduza churn e sustente o crescimento da sua operação.",
  openGraph: {
    title: "ATSOC | Suporte que sustenta crescimento",
    description:
      "Operação especializada para provedores, fora do horário comercial ou 24/7.",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "ATSOC, suporte que sustenta crescimento",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ATSOC | Suporte que sustenta crescimento",
    description:
      "Operação especializada para provedores, fora do horário comercial ou 24/7.",
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
