'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { WEBPACK_DEV_SERVER_PORT } = process.env;

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    `webpack-dev-server/client?http://localhost:${WEBPACK_DEV_SERVER_PORT}`,
    path.join(__dirname, 'src/index.js'),
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.tpl.html',
      inject: 'body',
      filename: 'index.html',
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.json?$/,
        loader: 'json-loader',
      },
      {
        test: /\.css$/,
        loader:
          'style-loader!css-loader?modules&localIdentName=[name]---[local]---[hash:base64:5]',
      },
    ],
  },
};
