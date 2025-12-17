import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout
      title={`Bem-vindo à ${siteConfig.title}`}
      description="Loja de informática - computadores, componentes e acessórios">
      
      {/* HERO SECTION */}
      <header className="hero hero--primary" style={{padding: '5rem 0'}}>
        <div className="container text--center">
          <h1 className="hero__title" style={{fontSize: '3.5rem', fontWeight: '900'}}>
            {siteConfig.title}
          </h1>
          <p className="hero__subtitle" style={{opacity: '0.9', marginBottom: '2rem'}}>
            Potência, performance e tecnologia ao teu alcance.
          </p>
          <Link className="button button--primary button--lg" to="/docs/intro" 
                style={{padding: '1rem 3rem', borderRadius: '50px', fontSize: '1.2rem'}}>
            Explorar Catálogo
          </Link>
        </div>
      </header>

      <main className="container margin-vert--xl">
        {/* CATEGORIAS */}
        <section className="row">
          <div className="col col--4 margin-bottom--lg">
            <div className="category-card">
              <span className="category-icon">💻</span>
              <h2>Computadores</h2>
              <p>Workstations e Gaming rigs configurados para máxima performance.</p>
            </div>
          </div>

          <div className="col col--4 margin-bottom--lg">
            <div className="category-card">
              <span className="category-icon">🧠</span>
              <h2>Componentes</h2>
              <p>As últimas CPUs e GPUs para o teu próximo upgrade.</p>
            </div>
          </div>

          <div className="col col--4 margin-bottom--lg">
            <div className="category-card">
              <span className="category-icon">🖱️</span>
              <h2>Periféricos</h2>
              <p>Acessórios de alta precisão para produtividade e jogo.</p>
            </div>
          </div>
        </section>

        {/* CONTACTOS PROFISSIONAIS */}
        <section className="contact-section text--center">
          <h2 style={{fontSize: '2rem'}}>Precisa de ajuda técnica?</h2>
          <p>A nossa equipa de especialistas está pronta para ajudar na sua escolha.</p>
          <div className="row justify--center" style={{gap: '2rem', marginTop: '1.5rem'}}>
            <div>
              <strong>📧 Email:</strong><br/>
              <a href="mailto:contacto@lojadokku.pt">contacto@lojadokku.pt</a>
            </div>
            <div>
              <strong>📞 Linha Direta:</strong><br/>
              <span>+351 912 345 678</span>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
