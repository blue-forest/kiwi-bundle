const pathLib = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

const projectPath = process.cwd()

const generateWebpackConfig = config => merge(require('./config')(config), {
  mode: 'development',
  entry: [
    `webpack-dev-server/client?http://localhost:${config.platforms.web.devPort}`,
    //'webpack/hot/only-dev-server',
    pathLib.join(projectPath, "src", "client", "index.ts"),
  ],
  devServer: {
    port: config.platforms.web.devPort,
    historyApiFallback: true,
    hot: true,
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new FaviconsWebpackPlugin({
      logo: pathLib.join(projectPath, "assets", "logo.png"),
      prefix: 'icons/',
      persistentCache: true,
      inject: true,
      icons: {
        android: false,
        appleIcon: false,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: false,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false,
      },
    }),
  ],
})

module.exports = require('./kiwi.config')(generateWebpackConfig)
