const webpack = require('webpack');

module.exports = {
  entry: ["whatwg-fetch", "./src/index.js"],
  output: {
    filename: "./dist/bundle.js"
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
        { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false
      }
    })
  ],
  devtool: "source-map"
}
