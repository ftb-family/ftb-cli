const { getBabelLoaderOptions } = require('./config/utils')

module.exports = {
  presets: getBabelLoaderOptions(),
  plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-transform-modules-commonjs']
}