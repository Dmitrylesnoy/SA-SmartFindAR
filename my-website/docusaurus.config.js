import { themes as prismThemes } from "prism-react-renderer";
const simplePlantUML = require("@akebifiky/remark-simple-plantuml");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SmartFindAR",
  tagline: "SmartFindAR course documentation",
  favicon: "img/favicon.ico",
  url: "https://dmitrylesnoy.github.io",
  baseUrl: "/SA-SmartFindAR/",
  organizationName: "DmitryLesnoy",
  projectName: "SA-SmartFindAR",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  trailingSlash: false,
  deploymentBranch: "gh-pages",

  plugins: [
    ["drawio", {}],
    // [
    //   "@docusaurus/plugin-content-docs",
    //   {
    //     id: "style-guide",
    //     path: "style-guide",
    //     routeBasePath: "style-guide",
    //     sidebarPath: require.resolve("./sidebars.js"), 
    //   },
    // ],
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          routeBasePath: "docs",
          editUrl: "https://github.com/DmitryLesnoy/SA-SmartFindAR/edit/main/my-website/",
          remarkPlugins: [simplePlantUML],
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
    // Redocusaurus для OpenAPI документации (если установили и есть spec-файл)
    // [
    //   'redocusaurus',
    //   {
    //     specs: [
    //       {
    //         id: 'smartfindar',
    //         spec: 'api_specs/smartfindar-openapi.yaml',
    //       },
    //     ],
    //     theme: {
    //       primaryColor: '#1890ff',
    //     },
    //   }
    // ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "SmartFindAR",
        logo: {
          alt: "SmartFindAR Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Документация",
          },
          // Если будет API документация
          // {
          //   to: '/docs/api/smartfindar',
          //   label: 'API',
          //   position: 'left',
          // },
          // Если будет Style Guide
          // {
          //   to: '/style-guide/',
          //   label: 'Style Guide',
          //   position: 'left',
          // },
          {
            href: "https://github.com/DmitryLesnoy/SA-SmartFindAR",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Документация",
            items: [
              {
                label: "Карточка сервиса",
                to: "/docs/intro",
              },
              // Добавьте другие страницы документации по мере создания
              // {
              //   label: 'Архитектура',
              //   to: '/docs/arch',
              // },
              // {
              //   label: 'API Reference',
              //   to: '/docs/api/smartfindar',
              // },
            ],
          },
          {
            title: "Для авторов",
            items: [
              // {
              //   label: 'Style Guide',
              //   to: '/style-guide/',
              // },
              {
                label: "Репозиторий",
                href: "https://github.com/DmitryLesnoy/SA-SmartFindAR",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} SmartFindAR. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
