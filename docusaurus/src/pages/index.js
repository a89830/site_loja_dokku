import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Loja Dokku"
      description="Loja de informática - computadores, componentes e acessórios"
    >
      {/* HERO */}
      <header className="hero hero--primary">
        <div className="container">
          <h1 className="hero__title">Loja Dokku</h1>
          <p className="hero__subtitle">
            A tua loja de informática de confiança
          </p>
          <div>
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
              <h2>💻 Computadores</h2>
              <p>
                Portáteis, desktops e workstations para trabalho e gaming.
              </p>
            </div>

            <div className="col col--4">
              <h2>🧠 Componentes</h2>
              <p>
                Processadores, gráficas, RAM, SSDs e motherboards.
              </p>
            </div>

            <div className="col col--4">
              <h2>🖱️ Acessórios</h2>
              <p>
                Ratos, teclados, monitores e muito mais.
              </p>
            </div>

          </div>
        </section>

        <section className="container margin-vert--lg">
          <h2>📞 Contactos</h2>
          <p>Email: contacto@lojadokku.pt</p>
          <p>Telefone: 912 345 678</p>
        </section>
      </main>
    </Layout>
  );
}
