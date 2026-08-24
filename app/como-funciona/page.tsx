import { CTA, PageHero, Shell } from "../components";
const steps = [
  [
    "01",
    "Diagnóstico do cenário",
    "Entendemos volume, horários críticos, sistemas, fluxos, gargalos e objetivo principal.",
  ],
  [
    "02",
    "Desenho da operação",
    "Definimos escopo, responsabilidades, acessos, postura de atendimento e indicadores.",
  ],
  [
    "03",
    "Preparação e treinamento",
    "A equipe recebe o contexto do provedor e calibra processos, linguagem e critérios de escalonamento.",
  ],
  [
    "04",
    "Ativação acompanhada",
    "A operação entra com acompanhamento próximo e ajustes para garantir consistência desde o início.",
  ],
  [
    "05",
    "Monitoramento e relatórios",
    "Acompanhamos motivos de contato, recorrências, resoluções e oportunidades de melhoria.",
  ],
  [
    "06",
    "Evolução contínua",
    "Ajustamos a rota para elevar eficiência, experiência, retenção e capacidade de escala.",
  ],
];
export default function ComoFunciona() {
  return (
    <Shell active="/como-funciona" pageClass="journey-page">
      <PageHero
        variant="journey-hero"
        eyebrow="Como funciona"
        title="Da primeira conversa a uma operação previsível."
        copy="Implantação clara, responsabilidades definidas e acompanhamento desde o início para que a ATSOC funcione como uma extensão do seu provedor."
        quote="Clareza no início, consistência na execução e visão de evolução no médio prazo."
        quoteBy="Fluxo de trabalho ATSOC"
      />
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Etapas de implantação</span>
            <h2>Um processo estruturado para sair do suporte reativo.</h2>
            <p>
              Cada etapa reduz ruído, acelera aderência e dá segurança para a
              gestão e para o cliente.
            </p>
          </div>
          <div className="timeline-grid">
            {steps.map(([n, t, c]) => (
              <div className="timeline-step" key={n}>
                <div className="step-head">
                  <div className="step-number">{n}</div>
                  <h3>{t}</h3>
                </div>
                <p className="timeline-text">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container two-col">
          <div className="rich-text">
            <span className="eyebrow">Resultado esperado</span>
            <h2>Menos operação reativa. Mais método, controle e qualidade.</h2>
            <p>
              O suporte passa a entender o problema, agir com critério e
              produzir informação útil para a gestão.
            </p>
          </div>
          <div className="info-grid">
            <div className="info-card">
              <h3>Fluxo</h3>
              <p>Processos claros para reduzir ruído e retrabalho.</p>
            </div>
            <div className="info-card">
              <h3>Postura</h3>
              <p>Condução mais profissional do atendimento.</p>
            </div>
            <div className="info-card">
              <h3>Controle</h3>
              <p>Mais previsibilidade para a gestão.</p>
            </div>
            <div className="info-card">
              <h3>Experiência</h3>
              <p>Menos atrito na jornada do cliente.</p>
            </div>
          </div>
        </div>
      </section>
      <CTA
        eyebrow="Próximo passo"
        title="Quer entender como seria a ativação no seu cenário?"
        copy="Fale com a ATSOC e veja como esse fluxo se adapta à sua operação atual."
      />
    </Shell>
  );
}
