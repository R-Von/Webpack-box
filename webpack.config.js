const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const webpack = require('webpack')


module.exports = {
  mode:'development',
  output:{
    path:path.resolve(__dirname,'dist')
  },
  devServer:{
    contentBase:path.join(__dirname,'dist'),
    port:9000,
    hot:true
  },
  module: {
    rules:[
      {
        test:/\.scss$/,
        use:[MiniCssExtractPlugin.loader,
          'css-loader','sass-loader']
      },
      {
        test:/\.css$/,
        use:[
          MiniCssExtractPlugin.loader,
          'css-loader']
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      title:'App',
      template:'./src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename:'[name].[contenthash:8].css',
      chunkFilename:'[name].[contenthash:8].css'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization:{
    minimizer:[new TerserPlugin({
      cache:true,
      terserOptions:{
        comments:false,
        compress:{
          unused:true,
          drop_debugger:true,
          drop_console:true, // eslint-disable-line
          dead_code:true
        }
      }
    })]
  }
}