// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '思维驰文档库',
  tagline: 'Switch Document',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://ns.cocomoe.cn',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'XinyuuM', // Usually your GitHub org/user name.
  projectName: 'NintendoSwitchDocs', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
         // editUrl:
          //  'https://github.com/XinyuuM/NintendoSwitchDocs/tree/master',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Switch Document',
        logo: {
          alt: 'Switch Document',
          src: 'img/logo.svg',
        },
        items: [
          
         
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '文档汇总',
                href: 'https://www.cocomoe.cn/blackboard'
              },
              {
                label: '留言箱',
                href: 'https://kiku.page/xinyuu'
              },

            ],
          },
          {
            title: '联系方式',
            items: [
              {
                label: '电子邮箱',
                to: 'mailto:webmaster@cocomoe.cn'
              }
            ],
          },
          
          {
            title: '文档许可',
            items: [
              {
                label: 'Creativecommons',
                href: 'https://creativecommons.org/'

              },
              {
                label: '署名-非商业性-相同方式共享',
                href: 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans',
              },
            
            ],
            
            
          },
          {
            title: '备案信息',
            items: [
              {
                label: '萌ICP备20249960号',
                href: 'https://icp.gov.moe/?keyword=20249960',
              },
            
            ],
            
            
          },
          {
            
            
          },
        ],
        copyright: `放弃一切权利`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
