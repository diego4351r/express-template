const path = require('path');
const Dotenv = require('dotenv-webpack');


module.exports = {
  entry: './src/app.ts',
  mode: 'production',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'app.js',
  },
  resolve: {
    alias: {
      '~': '/src',
      '@common': '/src/modules/common',
      '@ventemp': '/src/modules/ventemp',
    },

    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader'],
      },
    ],
  },
  plugins: [new Dotenv({
    path: '.env.production'
  })],
};
