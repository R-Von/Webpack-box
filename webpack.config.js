const path = require('path')
const HtmlWebpackPlugins = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode:'development',
  output:{
    path:path.resolve(__dirname,'dist')
  },
  module: {
    rules:[
      {
        test:/\.scss$/,
        use:['sass-loader']
      },
      {
        test:/\.css$/,
        use:[MiniCssExtractPlugin.loader,'css-loader']
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugins(),
    new MiniCssExtractPlugin({
      filename:'[name].css',
      chunkFilename:'[name].css'
    })
  ]
}