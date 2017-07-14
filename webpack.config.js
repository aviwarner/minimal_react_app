const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')

var externalAssets = {
  css: [
    'https://cdn.jsdelivr.net/bootstrap/3.3.7/css/bootstrap.min.css'
  ],
  js: [
    'https://cdn.jsdelivr.net/g/lodash@4.14.0,handlebarsjs@4.0.5,jquery@3.1.0,bootstrap@3.3.7,momentjs@2.14.1',
    'https://assets.zendesk.com/apps/sdk/2.0/zaf_sdk.js'
  ]
}
module.exports = {
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist", "assets")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["env", "react"] }
        }
      }
    ]
  },
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true,
    stats: "minimal"
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new HtmlWebpackExternalsPlugin(
      [{
        name: 'zendesk_app_framework_sdk',
        var: 'ZAFClient',
        url: 'https://assets.zendesk.com/apps/sdk/2.0/zaf_sdk.js'
       }]
     )
  ]
}
