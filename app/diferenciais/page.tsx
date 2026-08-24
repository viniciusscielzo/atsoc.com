import { CTA, PageHero, Shell } from "../components";
export default function Diferenciais() {
  return (
    <Shell active="/diferenciais" pageClass="differentials-page">
      <PageHero
        variant="diff-hero"
        eyebrow="Diferenciais ATSOC"
        title="Não é só atender melhor. É proteger a base e dar controle à operação."
        copy="A ATSOC entra onde muitos provedores mais sofrem: atendimento fora do horário, suporte sobrecarregado, pouca visibilidade e risco crescente de churn."
        quote="O diferencial não está em falar bem de suporte. Está em saber operar dentro da realidade do provedor."
        quoteBy="Visão ATSOC"
      />
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Por que ATSOC</span>
            <h2>
              Experiência prática em telecom, atendimento humano e gestão
              orientada a resultado.
            </h2>
            <p>
              Não somos uma central genérica. Entendemos a linguagem, os
              sistemas, os gargalos e a pressão operacional de um ISP.
            </p>
          </div>
          <div className="cards-3">
            <article className="feature-card">
              <h3>Vivência real em provedores</h3>
              <p>
                Experiência em suporte, retenção, customer success, programação
                de OS, indicadores e liderança operacional.
              </p>
            </article>
            <article className="feature-card">
              <h3>Atendimento que reduz atrito</h3>
              <p>
                Cada contato busca resolver, recuperar confiança e proteger a
                percepção de valor do cliente.
              </p>
            </article>
            <article className="feature-card">
              <h3>Atuação ativa, não só reativa</h3>
              <p>
                Com o Conecta Base, antecipamos insatisfação, risco de churn e
                oportunidades de upgrade.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container two-col">
          <div className="stats-grid">
            <div className="stat">
              <strong>Operação</strong>
              <h3>Mais clareza</h3>
              <p>Estrutura e menos improviso.</p>
            </div>
            <div className="stat">
              <strong>Cliente</strong>
              <h3>Mais confiança</h3>
              <p>Contato melhor conduzido.</p>
            </div>
            <div className="stat">
              <strong>Gestão</strong>
              <h3>Mais visibilidade</h3>
              <p>Evidências para agir na causa.</p>
            </div>
          </div>
          <div className="rich-text">
            <span className="eyebrow">Leitura executiva</span>
            <h2>
              Suporte deixa de ser apenas custo e passa a proteger receita.
            </h2>
            <p>
              Mais previsibilidade, menos desgaste da base e mais segurança para
              crescer sem ampliar desordenadamente a estrutura interna.
            </p>
            <ul className="bullets">
              <li>Redução de desgaste e risco de churn</li>
              <li>Controle sobre recorrências e gargalos</li>
              <li>Melhora da experiência do cliente</li>
              <li>Escopo flexível e implantação acompanhada</li>
            </ul>
          </div>
        </div>
      </section>
      <CTA
        eyebrow="Vamos falar disso"
        title="Seu suporte está protegendo sua base ou ajudando você a perder cliente?"
        copy="Uma conversa rápida já mostra os principais riscos e oportunidades da operação."
        label="Quero uma conversa estratégica"
      />
    </Shell>
  );
}
