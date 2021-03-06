const CopyWebpackPlugin = require('copy-webpack-plugin');

// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [new CopyWebpackPlugin([{ from: 'src/public' }])],
  },

  pluginOptions: {
    lintStyleOnBuild: true,
    stylelint: {},
  },

  css: {
    extract: false,
  },
};
