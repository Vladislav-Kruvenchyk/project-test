// eslint-disable-next-line no-undef
// eslint-disable
// eslint-disable-next-line
// eslint-disable-next-line vue/no-side-effects-in-computed-properties
const path = require('path')
const { defineConfig } = require('@vue/cli-service');
module.exports =   defineConfig({
  configureWebpack: {
    optimization: {
      runtimeChunk: 'single',
    },
  },
  devServer: {
    // host: '0.0.0.0',
    allowedHosts: 'all',
    /* your settings */
  },
  chainWebpack: config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    types.forEach(type => addStyleResource(config.module.rule('stylus').oneOf(type)))
  },
  transpileDependencies : [ 'vuex-composition-halpers' ]
})

function addStyleResource (rule) {
  rule.use('style-resource')
      .loader('style-resources-loader')
      .options({
        patterns: [
          path.resolve(__dirname, '../project_test/lib/css/public/global/styleguide.css'),
        ],
      })
}