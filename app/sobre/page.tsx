import { CTA, PageHero, Shell } from "../components";
export default function Sobre() {
  return (
    <Shell active="/sobre" pageClass="about-page">
      <PageHero
        variant="story-hero"
        eyebrow="Sobre a ATSOC"
        title="Uma operação criada por quem vive a realidade dos provedores."
        copy="A ATSOC nasceu para apoiar ISPs que querem crescer sem perder qualidade, proximidade com o cliente e controle sobre o suporte."
        quote="Não aprendemos suporte de provedor em uma apresentação. Aprendemos operando."
        quoteBy="Experiência ATSOC"
      />
      <section className="section">
        <div className="container two-col">
          <div className="rich-text">
            <span className="eyebrow">Nossa origem</span>
            <h2>
              Experiência prática transformada em uma parceria operacional.
            </h2>
            <p>
              Os fundadores da ATSOC construíram experiência em atendimento,
              retenção, customer success, agendamento, programação de OS,
              indicadores e liderança de equipes em telecom.
            </p>
            <p>
              Conhecemos a pressão do cliente sem conexão, o impacto de uma OS
              mal direcionada e o custo de uma operação sem visibilidade. Por
              isso, unimos atendimento humano, processo e leitura gerencial.
            </p>
          </div>
          <div className="info-grid">
            <div className="info-card">
              <h3>Missão</h3>
              <p>
                Ajudar provedores a entregar suporte consistente, humano e
                orientado a resultado.
              </p>
            </div>
            <div className="info-card">
              <h3>Visão</h3>
              <p>
                Ser referência em suporte que protege a experiência e sustenta
                crescimento.
              </p>
            </div>
            <div className="info-card">
              <h3>Postura</h3>
              <p>
                Atuar como extensão do provedor, com clareza, proximidade e
                responsabilidade.
              </p>
            </div>
            <div className="info-card">
              <h3>Foco</h3>
              <p>
                Retenção, eficiência operacional e valor percebido pelo cliente.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="section-heading center">
            <span className="eyebrow">Para quem faz sentido</span>
            <h2>
              Provedores que precisam de continuidade sem perder identidade.
            </h2>
            <p>
              Especialmente operações em crescimento, equipes pressionadas e
              ISPs que ainda deixam a base sem atendimento em horários críticos.
            </p>
          </div>
          <div className="cards-3">
            <article className="feature-card">
              <h3>Provedores em expansão</h3>
              <p>
                Que precisam estabilizar o atendimento antes que o crescimento
                pressione o churn.
              </p>
            </article>
            <article className="feature-card">
              <h3>Operações sobrecarregadas</h3>
              <p>
                Que sofrem com volume, recorrência, desgaste da equipe e pouca
                visibilidade.
              </p>
            </article>
            <article className="feature-card">
              <h3>Gestores que querem previsibilidade</h3>
              <p>
                Que precisam de uma operação controlada e pronta para o próximo
                salto.
              </p>
            </article>
          </div>
        </div>
      </section>
      <CTA
        eyebrow="Conexão ATSOC"
        title="Se o suporte não está no nível que seu crescimento pede, é hora de conversar."
        copy="Entendemos seu cenário e desenhamos uma parceria operacional sob medida."
        label="Falar com a ATSOC"
      />
    </Shell>
  );
}
