const { environment } = require('@rails/webpacker')
const path = require("path")
const { DefinePlugin } = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const vue = require('./loaders/vue')

const customConfig = {
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "..", "..", "app/javascript/src")
    }
  },
  optimization: {
    minimize: true,
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 30000,
      cacheGroups: {
        // @see https://hackernoon.com/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758
        defaultVendors: {
          reuseExistingChunk: true,
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const name = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/);
            const packageName = (name !== null) ? name[1] : ''
            return `npm.${packageName.replace('@', '')}`;
          },
          priority: 10,
        },
      }
    }
  }
}

environment.config.merge(customConfig)
environment.plugins.prepend(
  'VueLoaderPlugin',
  new VueLoaderPlugin()
)
environment.plugins.prepend(
  'Define',
  new DefinePlugin({
    __VUE_OPTIONS_API__: false,
    // or __VUE_OPTIONS_API__: true,
    __VUE_PROD_DEVTOOLS__: false
  })
)

environment.loaders.prepend('vue', vue)
module.exports = environment
