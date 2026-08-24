import { CTA, PageHero, Shell, whatsapp } from "../components";
export default function Contato() {
  return (
    <Shell active="/contato" pageClass="contact-page">
      <PageHero
        variant="contact-hero"
        eyebrow="Contato"
        title="Descubra onde seu suporte está perdendo eficiência e clientes."
        copy="Em poucos minutos, entendemos seu cenário e mostramos como a ATSOC pode apoiar sua operação fora do horário ou 24/7."
        quote="Quem age antes do churn aparecer cresce com mais segurança. Quem reage depois sempre paga mais caro."
        quoteBy="Visão ATSOC"
      />
      <section className="section">
        <div className="container contact-grid">
          <div className="contact-card">
            <span className="eyebrow">Canais diretos</span>
            <h3>Fale com a gente do jeito mais rápido para você.</h3>
            <p>
              Para agilidade, o WhatsApp é o melhor caminho. Se quiser detalhar
              o cenário, use o formulário.
            </p>
            <ul>
              <li>
                <strong>WhatsApp comercial:</strong>{" "}
                <a href={whatsapp} target="_blank" rel="noreferrer">
                  +55 11 91606-0157
                </a>
              </li>
              <li>
                <strong>E-mail comercial:</strong>{" "}
                <a href="mailto:comercial@atsoc.com.br">
                  comercial@atsoc.com.br
                </a>
              </li>
              <li>
                <strong>E-mail suporte:</strong>{" "}
                <a href="mailto:suporte@atsoc.com.br">suporte@atsoc.com.br</a>
              </li>
              <li>
                <strong>Instagram:</strong>{" "}
                <a
                  href="https://www.instagram.com/atsoc.oficial"
                  target="_blank"
                  rel="noreferrer"
                >
                  @atsoc.oficial
                </a>
              </li>
              <li>
                <strong>LinkedIn:</strong>{" "}
                <a
                  href="https://www.linkedin.com/company/atsoc-suporte/"
                  target="_blank"
                  rel="noreferrer"
                >
                  ATSOC Suporte
                </a>
              </li>
            </ul>
          </div>
          <div className="form-card">
            <span className="eyebrow">Solicitar diagnóstico</span>
            <form
              action="https://formsubmit.co/comercial@atsoc.com.br"
              method="POST"
            >
              <input
                type="hidden"
                name="_subject"
                value="Novo diagnóstico pelo site ATSOC"
              />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <div className="form-grid">
                <div className="field">
                  <label htmlFor="nome">Nome</label>
                  <input
                    id="nome"
                    name="nome"
                    required
                    placeholder="Seu nome"
                  />
                </div>
                <div className="field">
                  <label htmlFor="empresa">Empresa</label>
                  <input
                    id="empresa"
                    name="empresa"
                    required
                    placeholder="Nome do provedor"
                  />
                </div>
                <div className="field">
                  <label htmlFor="email">E-mail</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="seuemail@empresa.com"
                  />
                </div>
                <div className="field">
                  <label htmlFor="telefone">Telefone</label>
                  <input
                    id="telefone"
                    name="telefone"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <div className="field full">
                  <label htmlFor="interesse">Interesse principal</label>
                  <select id="interesse" name="interesse" defaultValue="">
                    <option value="" disabled>
                      Selecione
                    </option>
                    <option>Suporte fora do horário</option>
                    <option>Operação 24/7</option>
                    <option>Atendimento N1 e N2</option>
                    <option>Conecta Base</option>
                    <option>Quero entender a solução completa</option>
                  </select>
                </div>
                <div className="field full">
                  <label htmlFor="mensagem">Mensagem</label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    placeholder="Conte rapidamente o cenário atual da operação."
                  />
                </div>
                <div className="field full">
                  <button className="btn btn-primary" type="submit">
                    Quero entender meu cenário
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <CTA
        eyebrow="Mais rápido"
        title="Quer cortar caminho? Chame agora no WhatsApp."
        copy="Esse costuma ser o jeito mais rápido de sair do problema para uma solução prática."
        label="Abrir WhatsApp agora"
      />
    </Shell>
  );
}
