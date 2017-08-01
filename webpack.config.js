const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ["whatwg-fetch", "./src/index.js"],
  output: {
    path: __dirname + '/dist/assets/',
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".js"],
  },
  module: {
    loaders: [
        { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/, query: {
            cacheDirectory: true,
            presets: ['react', 'es2015']
        }},
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({ fallback: "style-loader", use: [
            {loader: "css-loader"},
            {loader: "sass-loader"}
          ]})
        },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'url-loader?limit=10000&mimetype=application/font-woff'
        },
        {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: 'file-loader'
        }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false
      }
    }),
    new ExtractTextPlugin("bundle.css")
  ],
  devtool: "source-map"
}
