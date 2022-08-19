const { merge } = require('webpack-merge')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

const commonConfig = require('./webpack.base.config')

module.exports = () => {
  return merge(commonConfig, {
    mode: 'development',
    output: {
      filename: '[name].js',
      chunkFilename: '[name].chunk.js'
    },
    devtool: 'eval-cheap-module-source-map',
    optimization: {
      runtimeChunk: true,
      removeAvailableModules: false,
      removeEmptyChunks: false,
      splitChunks: false
    },
    devServer: {
      port: 3000,
      open: true,
      hot: true,
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          test: /\.(css)$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.(s(a|c)ss)$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        }
      ]
    },
    plugins: [
      new ESLintPlugin(),
      new ReactRefreshWebpackPlugin({
        overlay: false
      })
    ]
  })
}
