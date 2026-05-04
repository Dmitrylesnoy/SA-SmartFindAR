import { themes as prismThemes } from "prism-react-renderer";

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

  themes: [
    "docusaurus-theme-plantuml",
  ],

  plugins: ["docusaurus-plugin-drawio"],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          routeBasePath: "docs",
          editUrl: "https://github.com/DmitryLesnoy/SA-SmartFindAR/edit/main/my-website/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
    [
      "redocusaurus",
      {
        specs: [
          {
            id: "smartfindar",
            spec: "api_specs/APIDesign.yaml",
          },
        ],
        theme: {
          primaryColor: "#1890ff",
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/docusaurus-social-card.jpg",
      colorMode: {
        defaultMode: "light",
        respectPrefersColorScheme: true,
      },
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
                label: "Введение",
                to: "/docs/intro",
              },
              {
                label: "Функциональные требования",
                to: "/docs/functional-requirements/overview",
              },
              {
                label: "Нефункциональные требования",
                to: "/docs/non-functional-requirements/overview",
              },
            ],
          },
          {
            title: "Моделирование",
            items: [
              {
                label: "Нотации и схемы",
                to: "/docs/diagrams/overview",
              },
              {
                label: "Сбор требований",
                to: "/docs/requirements/raci-matrix",
              },
            ],
          },
          {
            title: "Для авторов",
            items: [
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
        additionalLanguages: ["java", "yaml", "json", "bash"],
      },
    }),
};

export default config;
