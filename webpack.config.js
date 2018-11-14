var path = require('path');
var webpack = require('webpack');
var HttpWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('../server/', 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      { test: /\.(jpg|jpeg|png)$/, use: 'url-loader' },
      { test: /\.svg$/, use: 'svg-inline-loader' }
    ]
  },
  plugins: [
    new HttpWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  mode: 'development',
  devServer: {
    historyApiFallback: true,
    hot: true,
    proxy: {
      '/api': 'http://localhost:5000'
    }
  }
};
