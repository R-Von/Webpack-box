const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')

module.exports = {
  devServer:{
    hot:true
  },
  entry:"./src/main.js",
  resolve:{
    alias:{
      vue$:'vue/dist/vue.esm.js'
    },
    extensions:['*','.js','.vue','.json']
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        exclude:/node_moudles/,
        use:{
          loader:'babel-loader'
        }
      },
      {
        test:/\.vue$/,
        loader:'vue-loader'
      },
      {
        test:/\.css$/,
        loader:['style-loader','css-loader']
      },
      {
        test:/\.scss$/,
        loader:['style-loader','css-loader','scss-loader']
      },
      {
        test:/\.(png)|(jpg)|(gif)|(woff)|(svg)|(eot)|(ttf)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit:50000,   //小于50K的 都打包
              name:"[hash:8].[name].[ext]"
            }
          },
          'file-loader'
        ]
      }
    ]
  },
  plugins:[
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename:"index.html",
      template:"./src/index.html"
    })
  ]
}