// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Data Documentation Catalog',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'favicon.ico',
  organizationName: 'bvarta', // Usually your GitHub org/user name.
  projectName: 'data-catalog', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          includeCurrentVersion:false,
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo_bvt.png',
        },
        items: [
          {
            type: 'docsVersionDropdown',
            label: 'Data Type'
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Data Catalog',
          },
          {
            href: 'https://www.bvarta.com/',
            label: 'Our Website',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'POI Data',
                to: '/docs/POI/intro',
              },
              {
                label: 'Thematic Data',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Social Media',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/company/bvarta',
              },
              {
                label: 'Instagram',
                href: 'https://instagram.com/bvarta',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Our Website',
                href: 'https://www.bvarta.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Lokasi Intelligence. PT.Bhumi Varta Technology`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
