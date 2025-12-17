// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Loja Dokku',
  tagline: 'A tua loja de informática de confiança',
  favicon: 'img/4260900.png',

  url: 'https://lojadokku.pt', // Substitui pelo teu URL real se tiveres
  baseUrl: '/',

  // Configuração do GitHub (Ajusta para o TEU utilizador)
  organizationName: 'Dokku', 
  projectName: 'site_loja_dokku', 

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'pt', // Mudado para Português
    locales: ['pt'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Loja Dokku',
        logo: {
          alt: 'Loja Dokku Logo',
          src: 'img/4260900.png', // Garante que este ficheiro existe em static/img/
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Produtos',
          },
          {to: '/blog', label: 'Novidades', position: 'left'},
          {
            href: 'https://github.com/Dokku/site_loja_dokku',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Loja',
            items: [
              { label: 'Início', to: '/' },
              { label: 'Produtos', to: '/docs/intro' },
            ],
          },
          {
            title: 'Contacto',
            items: [
              { label: 'Email', href: 'mailto:contacto@lojadokku.pt' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Loja Dokku. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
