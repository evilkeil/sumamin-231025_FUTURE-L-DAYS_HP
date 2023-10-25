const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode:'development',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'FUTURE L DAYS',
      filename:'index.html',
      template:'src/template.html',
    }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool:'source-map',
  devServer:{
      static:{
          directory:path.resolve(__dirname,'dist')
      },
      port:3000,
      open:true,
      hot:true,
      compress:true,
      historyApiFallback:true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};