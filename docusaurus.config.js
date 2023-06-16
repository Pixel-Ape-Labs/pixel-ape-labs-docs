// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Pixel Ape Labs",
  tagline: "Tools to help bridge Discord and Solana",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.pixelapelabs.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Pixel-Ape-Labs", // Usually your GitHub org/user name.
  projectName: "pixel-ape-labs-docs", // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          breadcrumbs: false,
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Docs",
        logo: {
          alt: "Pixel Ape Labs",
          src: "img/logo-light.png",
          srcDark: "img/logo-dark.png",
        },
        items: [
          // {
          //   type: "docSidebar",
          //   sidebarId: "docsSidebar",
          //   position: "left",
          //   label: "Docs",
          // },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://pixelapelabs.com",
            label: "Website",
            position: "right",
          },
        ],
      },
      // footer: {
      //   style: "dark",
      //   links: [
      //     {
      //       title: "Resources",
      //       items: [
      //         {
      //           label: "Website",
      //           href: "https://pixelapelabs.com",
      //         },
      //       ],
      //     },
      //     {
      //       title: "Pixel Apes",
      //       items: [
      //         {
      //           label: "Discord",
      //           href: "https://discord.gg/9ES7UszWTX",
      //         },
      //         {
      //           label: "Twitter",
      //           href: "https://twitter.com/pixelapes",
      //         },
      //         {
      //           label: "Website",
      //           href: "https://pixelapes.xyz",
      //         },
      //       ],
      //     },
      //     {
      //       title: "Community",
      //       items: [
      //         {
      //           label: "Twitter",
      //           href: "https://twitter.com/pixelapelabs",
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} Pixel Ape Labs.`,
      // },
      prism: {
        theme: require("prism-react-renderer").themes.github,
        darkTheme: require("prism-react-renderer").themes.dracula,
      },
      colorMode: {
        defaultMode: "dark",
      },
    }),
};

module.exports = config;
