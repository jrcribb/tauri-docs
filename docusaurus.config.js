const path = require('path')
const fs = require('fs')

const version = fs.readFileSync('./version.txt', 'utf-8').trim()

const repoUrl = 'https://github.com/tauri-apps/tauri'
const discordUrl = 'https://discord.com/invite/tauri'
const devToUrl = 'https://dev.to/tauri'
const awesomeTauriUrl = 'https://github.com/tauri-apps/awesome-tauri'

const navbarItems = [
  {
    to: 'about/intro',
    label: 'About',
    position: 'left',
  },
  {
    to: 'guides/getting-started/prerequisites',
    label: 'Guides',
    position: 'left',
  },
  {
    to: 'api/config',
    label: 'API',
    position: 'left',
  },
  {
    to: 'release-notes',
    label: 'Release Notes',
    position: 'left',
  },
  {
    label: 'Community',
    position: 'left',
    items: [
      {
        label: 'Get Involved',
        to: 'community/contributor-guide',
      },
      {
        label: 'Sponsors',
        to: '/#sponsors',
        activeBasePath: 'never-active',
      },
      {
        label: 'Discord',
        href: discordUrl,
      },
      {
        label: 'Awesome Tauri',
        href: awesomeTauriUrl,
      },
    ],
  },
  {
    label: 'RC',
    to: '/#roadmap',
    position: 'right',
    className: 'badge badge--warning',
  },
  {
    href: repoUrl,
    'aria-label': 'GitHub',
    position: 'right',
    className: 'header-github-link',
  },
  {
    type: 'localeDropdown',
    position: 'right',
    dropdownItemsAfter: [
      {
        to: 'https://github.com/tauri-apps/tauri-docs#contributing',
        label: 'Help us translate',
      },
    ],
  },
  {
    type: 'search',
    position: 'right',
  },
]

const footerLinks = [
  {
    title: 'Docs',
    items: [
      {
        label: 'Get started',
        to: 'guides/getting-started/beginning-tutorial',
      },
      {
        label: 'API',
        to: 'api/config/',
      },
      {
        label: 'Release notes',
        to: 'release-notes',
      },
    ],
  },
  {
    title: 'Contact',
    items: [
      {
        label: 'Mail',
        href: 'mailto:contact@tauri.studio',
      },
      {
        label: 'Twitter',
        href: 'https://twitter.com/TauriApps',
      },
    ],
  },
  {
    title: 'Network',
    items: [
      {
        label: 'DevTo Blog',
        href: devToUrl,
      },
      {
        label: 'OpenCollective',
        href: 'https://opencollective.com/tauri',
      },
      {
        label: 'GitHub',
        href: repoUrl,
      },
    ],
  },
  {
    title: 'Community',
    items: [
      {
        label: 'Sponsors',
        to: '/#sponsors',
      },
      {
        label: 'Discord',
        href: discordUrl,
      },
      {
        label: 'Awesome Tauri',
        href: awesomeTauriUrl,
      },
    ],
  },
]

const siteConfig = {
  title: 'Tauri Studio',
  tagline:
    'Build smaller, faster, and more secure desktop applications with a web frontend',
  organizationName: 'Tauri Studio',
  projectName: 'tauri',
  baseUrl: `/`,
  favicon: 'img/favicon-32x32.png',
  url: 'https://tauri.studio',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/vsLight'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
      additionalLanguages: ['rust'],
    },
    version,
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: 'rc',
      content:
        "<div id='announcement-rc'>🚀 Tauri Release Candidate has landed! <a id='announcement-link' target='_blank' rel='noopener noreferrer' href='https://dev.to/tauri/tauri-10-release-candidate-53jk'>Click here for more details.</a></div>",
      backgroundColor: 'var(--ifm-color-primary)',
      textColor: 'var(--ifm-button-color)',
    },
    navbar: {
      hideOnScroll: false,
      logo: {
        alt: 'Tauri Logo',
        src: 'img/tauri_with_wordmark_dark.svg',
        srcDark: 'img/tauri_with_wordmark.svg',
      },
      items: navbarItems,
    },

    footer: {
      style: 'dark',
      links: footerLinks,
      copyright: `Copyright © ${new Date().getFullYear()} Tauri Contributors. CC-BY / MIT`,
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          path: './docs/',
          exclude: ['api/rust/**', 'api/js/js-api.json'],
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          editUrl: 'https://github.com/tauri-apps/tauri-docs/edit/dev/',
          sidebarCollapsible: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    path.resolve(__dirname, './plugins/dynamic-css.js'),
    path.resolve('./plugins/external-assets'),
  ],
}

module.exports = siteConfig
