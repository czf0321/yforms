export default {
  hash: true,
  mode: 'site',
  title: 'yforms',
  favicon: '/favicon.ico',
  logo: '/logo.png',
  menus: {
    '/guide': [
      {
        title: '介绍',
        children: ['guide/index', 'guide/getting-started'],
      },
    ],
  },
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
};
