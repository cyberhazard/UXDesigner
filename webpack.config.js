const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'js/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'stylus-loader']
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      },
      {
        test: /\.pug$/,
        exclude: /node_modules/,
        loader: 'pug-loader',
        options: {
          pretty: true,
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[hash].[ext]',
            }
          }
        ]
      },
      {
        test: /\.(woff2?|ttf|eot|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/spacecode-[hash].[ext]',
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/style.css'),
    new HtmlWebpackPlugin({ filename: 'index.html', template: './src/pug/index.pug' }),
  ],
  devServer: {
    port: 8080,
    host: '0.0.0.0',
  }
}
