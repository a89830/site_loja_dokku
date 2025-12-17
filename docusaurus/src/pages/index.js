import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout
      title={siteConfig.title}
      description="Loja de informática - computadores, componentes e acessórios"
    >
      {/* HERO */}
      <header className="hero hero--primary" style={{padding: '4rem 0', textAlign: 'center'}}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">
            A tua loja de informática de confiança
          </p>
          <div style={{marginTop: '2rem'}}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro"
            >
              Ver Produtos
            </Link>
          </div>
        </div>
      </header>

      {/* CONTEÚDO */}
      <main>
        <section className="container margin-vert--lg">
          <div className="row">
            <div className="col col--4">
              <div className="text--center">
                <h2>💻 Computadores</h2>
                <p>Portáteis, desktops e workstations para trabalho e gaming.</p>
              </div>
            </div>

            <div className="col col--4">
              <div className="text--center">
                <h2>🧠 Componentes</h2>
                <p>Processadores, gráficas, RAM, SSDs e motherboards.</p>
              </div>
            </div>

            <div className="col col--4">
              <div className="text--center">
                <h2>🖱️ Acessórios</h2>
                <p>Ratos, teclados, monitores e muito mais.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="container margin-vert--lg text--center">
          <hr />
          <h2>📞 Contactos</h2>
          <p>Email: <strong>contacto@lojadokku.pt</strong></p>
          <p>Telefone: <strong>912 345 678</strong></p>
        </section>
      </main>
    </Layout>
  );
}
