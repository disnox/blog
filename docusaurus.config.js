// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '🎥啵贝琴的小站',
  tagline: '这是属于啵贝琴的专属网页；记录自己学习的历程以及感悟',
  url: 'https://littlefairy.top',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.jpg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'DxIMT', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        /*docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/DxIMT/blog/tree/master',
        },*/
        blog: {
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.

        },
        theme: {
          customCss: require.resolve('./src/css/custom_Test.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '🎥啵贝琴',
        logo: {
          alt: '🎥啵贝琴',
          src: 'img/src.webp',
        },
        items: [//顶部菜单栏
          {
            label: '首页',
            position: 'right',
            items: [
              {
                label: '随笔',
                to: "/",
              }
            ]
          },
          {
            to: '/blog',
            label: '博客', 
            position: 'right'
          },
          {
            to: 'https://gitee.com/xin-is-a-little-fairy/dashboard/projects',
            label: 'Gitee',
            position: 'right',
          },
        ],
      },
      footer: {//页面底部菜单栏
        style: 'dark',
        links: [
          {
            title: '学习',
            items: [
              {
                label: '菜鸟教程',
                href: "https://www.runoob.com/",
              },
              {
                label: "B站",
                href: "https://www.bilibili.com/",
              },
              {
                label: "STM中文官网",
                href: "https://shequ.stmicroelectronics.cn/",
              },
            ],
          },
          {
            title: '社交媒体',
            items: [
              {
                label: 'B站',
                href: 'https://space.bilibili.com/481621384?spm_id_from=333.1007.0.0',
              },
              /*{
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },*/
            ],
          },
          {
            title: '友情链接',
            items: [
              {
                label: '愧怍',
                to: 'https://kuizuo.cn/',
              },
              {
                label: '尚宇的小站',
                to: 'https://www.disnox.top/',
              },
              {
                html: `<a href="https://www.docusaurus.cn/" target="_blank"><img style="height:50px;margin-top:0.5rem" src="/img/buildwith.png" /><a/>`
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
