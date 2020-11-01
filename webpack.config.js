const path = require('path');

const ROOT = path.resolve(__dirname, 'src');
const DESTINATION = path.resolve(__dirname, 'dist');
const PROD = process.env.NODE_ENV === 'production';

module.exports = {
  mode: PROD ? 'production' : 'development',
  context: ROOT,
  entry: './main.js',
  output: {
    filename: PROD ? '[name].[hash].js' : '[name].js',
    path: DESTINATION
  },
  resolve: {
    extensions: ['.js'],
    modules: [
      ROOT,
      'node_modules'
    ]
  },
  devtool: PROD ? 'eval' : 'eval-cheap-module-source-map',
  devServer: {
    contentBase: DESTINATION,
    compress: true,
    port: 9000
  }
};
