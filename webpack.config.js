// import 
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode:'development',
  entry:{
    index:'./src/index.js',
    list:'./src/list.js'
  },
  // stats: { children: false },
  module:{
    rules:[
      {
        test:/\.css$/,
        use:[MiniCssExtractPlugin.loader,'css-loader']
      }
    ]
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename:'[name].css',
      chunkFilename:'[name].css'
    }),
    new HtmlWebpackPlugin({
      title:'Index',
      template:'./src/index.html',
      filename:'index.html',
      chunks:['index']
    }),
    new HtmlWebpackPlugin({
      title:'List',
      template:'./src/list.html',
      filename:'list.html',
      chunks:['list']
    })
  ]
}