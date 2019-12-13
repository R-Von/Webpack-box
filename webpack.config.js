// import 
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode:'development',
  entry:'./src/index.js',
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
      template:'./src/index.html'
    })
  ]
}