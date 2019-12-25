const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
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
      }
    ]
  },
  plugins:[
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename:"index.html",
      template:"./src/index.html"
    })
  ]
}