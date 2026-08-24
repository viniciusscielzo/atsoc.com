import Link from "next/link";
import { CTA, Shell, whatsapp } from "./components";
export default function Home() {
  return (
    <Shell active="/">
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-left">
            <span className="eyebrow">
              Seu provedor atende quando o cliente mais precisa?
            </span>
            <h1>
              Cliente sem resposta perde confiança. Provedor sem suporte perde cliente.
            </h1>
            <p>
              A ATSOC mantém o atendimento técnico do seu provedor ativo fora do
              horário comercial ou 24/7. Sua base recebe suporte, sua equipe ganha
              fôlego e sua operação cresce com mais controle.
            </p>
            <div className="hero-actions">
              <a
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Solicitar diagnóstico gratuito
              </a>
              <Link href="/servicos" className="btn btn-secondary">
                Conhecer os serviços
              </Link>
            </div>
            <div className="hero-tags">
              <span>Suporte fora do horário</span>
              <span>Operação 24/7</span>
              <span>Foco em redução de churn</span>
            </div>
            <div className="decision-proof" aria-label="Diferenciais principais">
              <div><strong>24/7</strong><span>Cobertura disponível</span></div>
              <div><strong>N1 + N2</strong><span>Atendimento técnico</span></div>
              <div><strong>Flexível</strong><span>Escopo sob medida</span></div>
            </div>
          </div>
          <div className="hero-right">
            <div className="panel operation-panel">
              <span className="panel-kicker">
                Operação orientada por experiência
              </span>
              <h2>Seu suporte continua. Sua equipe respira.</h2>
              <p className="panel-intro">
                Uma extensão da sua operação, com processo, proximidade e visão
                gerencial.
              </p>
              <div className="operation-list">
                <div className="operation-row">
                  <span className="operation-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 1 0 9 9"/><path d="M12 7v5l3 2"/><path d="M17 3h4v4"/></svg>
                  </span>
                  <div>
                    <h3>Cobertura flexível</h3>
                    <p>Fora do horário comercial ou operação completa 24/7.</p>
                  </div>
                </div>
                <div className="operation-row">
                  <span className="operation-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24"><path d="M4 13v-2a8 8 0 0 1 16 0v2"/><path d="M4 13h3v6H5a1 1 0 0 1-1-1zM20 13h-3v6h2a1 1 0 0 0 1-1z"/><path d="M17 19c0 2-2 2-4 2"/></svg>
                  </span>
                  <div>
                    <h3>Atendimento especializado</h3>
                    <p>
                      Triagem técnica e resolução alinhadas à realidade do seu
                      ISP.
                    </p>
                  </div>
                </div>
                <div className="operation-row">
                  <span className="operation-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24"><path d="M5 20V10M12 20V4M19 20v-7"/><path d="M3 20h18"/></svg>
                  </span>
                  <div>
                    <h3>Gestão com evidências</h3>
                    <p>
                      Indicadores, recorrências e oportunidades para proteger a
                      base.
                    </p>
                  </div>
                </div>
              </div>
              <div className="panel-badges">
                <span>Menos atrito</span>
                <span>Mais controle</span>
                <span>Mais retenção</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="overview">
        <div className="container">
          <div className="section-heading center">
            <span className="eyebrow">O que entregamos</span>
            <h2>
              Uma estrutura de suporte que cabe na realidade do seu provedor.
            </h2>
            <p>
              Você não contrata apenas atendimento. Recebe continuidade,
              consistência e visão para transformar o suporte em proteção de
              receita.
            </p>
          </div>
          <div className="cards-3">
            <Link href="/servicos" className="feature-card feature-card-link">
              <h3>Suporte especializado</h3>
              <p>
                Atendimento remoto N1 e N2 com linguagem aderente à realidade
                dos provedores.
              </p>
              <span>Conhecer serviços</span>
            </Link>
            <Link href="/como-funciona" className="feature-card feature-card-link">
              <h3>Implantação clara</h3>
              <p>
                Do diagnóstico à ativação, com processos, acessos e
                responsabilidades definidos.
              </p>
              <span>Ver como funciona</span>
            </Link>
            <Link href="/diferenciais" className="feature-card feature-card-link">
              <h3>Gestão e retenção</h3>
              <p>
                Relatórios, leitura de recorrências e condução orientada à
                experiência do cliente.
              </p>
              <span>Ver diferenciais</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="importance">
        <div className="container importance-grid">
          <div>
            <span className="eyebrow">Quando a ATSOC faz sentido</span>
            <h2>O problema não começa no cancelamento. Começa muito antes.</h2>
            <p>
              Chamados sem retorno, atendimento interrompido e equipe
              sobrecarregada desgastam a percepção de valor até o cliente
              decidir sair.
            </p>
            <ul className="bullets">
              <li>Clientes ficam sem resposta fora do horário</li>
              <li>A equipe interna vive apagando incêndios</li>
              <li>
                Há muitos chamados, mas pouca inteligência sobre as causas
              </li>
              <li>Crescer passou a pressionar a qualidade da operação</li>
            </ul>
          </div>
          <div className="info-grid">
            <div className="info-card">
              <h3>Continuidade</h3>
              <p>Atendimento quando sua equipe interna não está disponível.</p>
            </div>
            <div className="info-card">
              <h3>Eficiência</h3>
              <p>Mais resolução remota e menos deslocamento desnecessário.</p>
            </div>
            <div className="info-card">
              <h3>Visibilidade</h3>
              <p>Leitura executiva dos gargalos e recorrências.</p>
            </div>
            <div className="info-card">
              <h3>Escala</h3>
              <p>Base operacional para crescer sem perder qualidade.</p>
            </div>
          </div>
        </div>
      </section>
      <CTA
        eyebrow="Próximo passo"
        title="Descubra onde seu suporte está perdendo eficiência e clientes."
        copy="Em uma conversa objetiva, entendemos seu cenário e mostramos como a ATSOC pode apoiar sua operação."
        label="Solicitar diagnóstico gratuito"
      />
    </Shell>
  );
}
