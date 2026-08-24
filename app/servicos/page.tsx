import { CTA, PageHero, Shell } from "../components";
const items = [
  [
    "Suporte fora do horário",
    "Sua base continua assistida à noite, em fins de semana e feriados, sem ampliar toda a estrutura interna.",
  ],
  [
    "Operação 24 horas",
    "Atendimento contínuo, processos definidos e escala para provedores que não podem deixar o cliente esperando.",
  ],
  [
    "Atendimento N1 e N2",
    "Triagem técnica, diagnóstico remoto e resolução com linguagem alinhada à realidade de cada provedor.",
  ],
  [
    "Gestão e inteligência",
    "Relatórios executivos, leitura de recorrências e evidências para agir na causa dos problemas.",
  ],
  [
    "Retenção na jornada",
    "Cada contato é conduzido para reduzir atrito, recuperar confiança e proteger a permanência do cliente.",
  ],
  [
    "Conecta Base",
    "Contato ativo para antecipar insatisfação, identificar risco de churn e abrir oportunidades de upgrade.",
  ],
];
export default function Servicos() {
  return (
    <Shell active="/servicos" pageClass="services-page">
      <PageHero
        variant="service-hero"
        eyebrow="Serviços ATSOC"
        title="Suporte técnico que protege a experiência e dá base real para crescer."
        copy="Do atendimento fora do horário à operação 24/7, construímos o escopo conforme a necessidade do seu provedor, sem solução engessada."
        quote="O provedor não contrata apenas atendimento. Contrata continuidade, previsibilidade e proteção de receita."
        quoteBy="Proposta ATSOC"
      />
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">O que entregamos</span>
            <h2>
              Frentes de atuação para o que realmente pesa na rotina do
              provedor.
            </h2>
            <p>
              Cada serviço reduz atrito, organiza o suporte e melhora a
              percepção da base sobre a qualidade da operação.
            </p>
          </div>
          <div className="cards-3 services-grid">
            {items.map(([t, c]) => (
              <article className="feature-card" key={t}>
                <h3>{t}</h3>
                <p>{c}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container two-col">
          <div className="rich-text">
            <span className="eyebrow">Impacto esperado</span>
            <h2>Menos improviso. Mais continuidade, controle e retenção.</h2>
            <p>
              O suporte deixa de ser apenas reação e passa a proteger a
              experiência do cliente e a receita do provedor.
            </p>
            <ul className="bullets">
              <li>Mais resolução remota e menos deslocamento desnecessário</li>
              <li>Mais consistência no contato com o assinante</li>
              <li>Mais clareza sobre os problemas recorrentes</li>
              <li>Mais espaço para crescer sem pressionar a equipe interna</li>
            </ul>
          </div>
          <div className="stats-grid">
            <div className="stat">
              <strong>+Eficiência</strong>
              <h3>Rotina previsível</h3>
              <p>Processos claros e menos improviso.</p>
            </div>
            <div className="stat">
              <strong>+Controle</strong>
              <h3>Visão executiva</h3>
              <p>Indicadores para decidir melhor.</p>
            </div>
            <div className="stat">
              <strong>+Retenção</strong>
              <h3>Valor percebido</h3>
              <p>Experiência que protege a base.</p>
            </div>
          </div>
        </div>
      </section>
      <CTA
        eyebrow="Próximo movimento"
        title="Qual cobertura faz sentido para sua operação?"
        copy="Converse com a ATSOC e desenhe um escopo adequado ao seu volume, horários e objetivo."
        label="Falar com o comercial"
      />
    </Shell>
  );
}
