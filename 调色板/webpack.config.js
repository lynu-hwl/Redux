const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [path.resolve(__dirname, "node_modules")]
      },
      {
        test:/\.css$/,
        loader:['style-loader','css-loader'],
        exclude: [path.resolve(__dirname, "node_modules")]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "index.html" }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    host: 'localhost',
    port: 8000,
    hot: true
  }
}