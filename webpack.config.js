const HTMLPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
  mode:'development',
  // output:''
  devtool:false,
  module:{
    rules:[
      {
        test:/\.css$/,
        use:[
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader:'postcss-loader'
          }
        ]
      },
      {
        test:/\.(png|svg|jpg|gif)$/,
        use:{
          loader:'url-loader'
        }
      }
    ]
  },
  plugins:[
    new HTMLPlugin({
      filename:'[name].html'
    }),
    new MiniCssExtractPlugin({
      filename:'[name].css'
    })
  ]
}