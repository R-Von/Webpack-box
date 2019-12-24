const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
        use:['sass-loader']
      },
      {
        test:/\.css$/,
        use:[MiniCssExtractPlugin.loader,'css-loader']
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      title:'App',
      template:'./src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename:'[name].css',
      chunkFilename:'[name].css'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}