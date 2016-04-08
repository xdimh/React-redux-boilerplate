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
    filename: "app.js",
    publicPath: "http://127.0.0.1:8000/build/"
    // publicPath: "/js/anifullpack/build/"
  },

  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true }),
    new webpack.DefinePlugin({
          'process.env': {
              'NODE_ENV': JSON.stringify('production')
          }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin()
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ["babel-loader?stage=0&compact=true"] },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.less$/, exclude: /\.useable\.less$/, loader: 'style!css!less' },
      { test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
      { test: /\.(png|jpg|jpeg|gif)$/, loader: 'url-loader?limit=10000' }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  }
}
