import Link from "next/link";
import NetworkBackground from "./network-background";
export const whatsapp =
  "https://wa.me/5511916060157?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20ATSOC%20e%20quero%20entender%20como%20melhorar%20meu%20suporte.";
const links = [
  ["Home", "/"],
  ["Serviços", "/servicos"],
  ["Como funciona", "/como-funciona"],
  ["Diferenciais", "/diferenciais"],
  ["Sobre", "/sobre"],
  ["Contato", "/contato"],
];
export function Header({ active }: { active: string }) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="logo-link">
          <img src="/logo-transparent.png" alt="ATSOC" className="logo" />
        </Link>
        <nav className="nav" aria-label="Navegação principal">
          {links.map(([name, href]) => (
            <Link
              key={href}
              href={href}
              className={active === href ? "active" : ""}
            >
              {name}
            </Link>
          ))}
        </nav>
        <a
          href={whatsapp}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary header-cta"
        >
          Fale conosco
        </a>
      </div>
    </header>
  );
}
export function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <img
              src="/logo-transparent.png"
              alt="ATSOC"
              className="footer-logo"
            />
            <p>
              Suporte técnico para provedores com foco em experiência do
              cliente, retenção e crescimento sustentável.
            </p>
          </div>
          <div className="footer-nav">
            <h4>Navegação</h4>
            <ul>
              {links.map(([name, href]) => (
                <li key={href}>
                  <Link href={href}>{name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-contact-area">
            <div className="footer-contact">
              <h4>Contato</h4>
              <ul>
              <li className="footer-direct-contact">
                <a href={whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp +55 11 91606-0157">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.7A8.5 8.5 0 1 1 20.5 11.7Z" />
                    <path d="M8.2 8c.4 3.8 3.9 7.1 7.6 7.7l1.2-1.5-2.4-1.1-.9 1c-1.5-.5-3.4-2.3-3.9-3.8l1-1L9.7 7Z" />
                  </svg>
                  <span>+55 11 91606-0157</span>
                </a>
              </li>
              <li className="footer-direct-contact">
                <a href="mailto:comercial@atsoc.com.br">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>
                  <span>comercial@atsoc.com.br</span>
                </a>
              </li>
              <li className="footer-direct-contact">
                <a href="mailto:suporte@atsoc.com.br">
                  <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>
                  <span>suporte@atsoc.com.br</span>
                </a>
              </li>
              </ul>
            </div>
            <div className="footer-socials" aria-label="Redes sociais da ATSOC">
              <div className="footer-social-link">
              <a
                href="https://www.instagram.com/atsoc.oficial"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram da ATSOC"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" className="icon-fill" /></svg>
              </a>
              </div>
              <div className="footer-social-link">
              <a
                href="https://www.linkedin.com/company/atsoc-suporte/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn da ATSOC"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 10v7M8 7v.1M12 17v-4.1a2.9 2.9 0 0 1 5.8 0V17M12 10v7" /></svg>
              </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© 2026 ATSOC. Todos os direitos reservados.</p>
        </div>
      </footer>
      <a
        href={whatsapp}
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
        aria-label="Chamar a ATSOC no WhatsApp"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.7A8.5 8.5 0 1 1 20.5 11.7Z" />
          <path d="M8.1 7.8c.2-.5.5-.5.8-.5h.5c.2 0 .4.1.5.4l.8 2c.1.3 0 .5-.2.7l-.6.7c-.2.2-.1.4 0 .6.7 1.2 1.7 2.2 3 2.8.2.1.4.1.6-.1l.8-1c.2-.2.4-.3.7-.2l2 .9c.3.1.4.3.4.5 0 .4-.2 1.4-.7 1.9-.5.6-1.4.9-2.3.7-1.2-.2-2.8-.9-4.7-2.5-1.5-1.3-2.6-2.9-3-4.1-.4-1.1 0-2.2.4-2.8Z" />
        </svg>
      </a>
    </>
  );
}
export function Shell({ active, children, pageClass = "" }: { active: string; children: React.ReactNode; pageClass?: string }) {
  return (
    <>
      <NetworkBackground />
      <Header active={active} />
      <main className={pageClass}>{children}</main>
      <Footer />
    </>
  );
}
export function PageHero({
  eyebrow,
  title,
  copy,
  quote,
  quoteBy,
  variant = "",
}: {
  eyebrow: string;
  title: string;
  copy: string;
  quote: string;
  quoteBy: string;
  variant?: string;
}) {
  return (
    <section className={`page-hero compact ${variant}`}>
      <div className="container two-col">
        <div className="rich-text">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{copy}</p>
        </div>
        <div className="quote-box">
          <p>“{quote}”</p>
          <span>{quoteBy}</span>
        </div>
      </div>
    </section>
  );
}
export function CTA({
  eyebrow,
  title,
  copy,
  label = "Chamar no WhatsApp",
}: {
  eyebrow: string;
  title: string;
  copy: string;
  label?: string;
}) {
  return (
    <section className="cta">
      <div className="container cta-box">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          <p>{copy}</p>
        </div>
        <a
          href={whatsapp}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          {label}
        </a>
      </div>
    </section>
  );
}
