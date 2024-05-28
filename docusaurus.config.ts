import { themes as prismThemes } from "prism-react-renderer";
import type { Config, PluginConfig } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: 'DevOps Docs',
  favicon: "favicon.ico",

  url: "https://devops-docs.ohc.network",
  baseUrl: "/",

  organizationName: "coronasafe",
  projectName: "devops-docs",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/coronasafe/devops-docs/tree/main/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/coronasafe/devops-docs/tree/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        language: ["en"],
      },
    ],
    '@docusaurus/theme-mermaid'
  ] satisfies PluginConfig[],

  markdown: {
    mermaid: true,
  },

  themeConfig: {
    image: "img/social-card.jpg",
    navbar: {
      title: 'Care DevOps Docs',
      logo: {
        alt: "OHC",
        srcDark: "img/logo/svg/light_full.svg",
        src: "img/logo/svg/color_full.svg",
      }
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Coronasafe Deploy Docs',
              to: 'https://deploydocs.coronasafe.network/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Slack',
              href: 'https://slack.ohc.network/',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'OHC Network',
              to: 'https://ohc.network',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/coronasafe',
            },
            {
              label: 'Products OHC Network',
              href: 'https://products.ohc.network/',
            },
          ],
        },
      ],
      copyright: ` ${new Date().getFullYear()} DevOps Docs. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
