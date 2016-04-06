var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * This is the Webpack configuration file for production.
 */
module.exports = {
  devtool:'cheap-module-source-map',
  entry: "./src/app",
 /* entry: [
    'webpack-dev-server/client?http://0.0.0.0:9090',//资源服务器地址
    'webpack/hot/only-dev-server',
    "./src/app"
  ],*/

  output: {
    path: __dirname + "/build/",
    filename: "app.js"
    //publicPath: "http://127.0.0.1:9090/build/"
    // publicPath: "/js/anifullpack/build/"
  },

  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new webpack.DefinePlugin({
          'process.env': {
              'NODE_ENV': JSON.stringify('development')
          }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin()
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ["babel-loader?stage=0&compact=true"] }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  }
}
