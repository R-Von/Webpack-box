const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry:"./src/index.jsx",
  resolve:{
    extensions:['.wasm','.mjs','.js','.json','.jsx']
  },
  module:{
    rules:[
      {
        test:/\.css?$/,
        use:['style-loader','css-loader']
      },
      {
        test:/\.jsx?$/, //匹配js jsx文件
        exclude:'/node_modules', //过滤 node_modules文件夹
        use:{
          // loader是babel
          loader:'babel-loader',
          options:{
            // babel转义的配置选项
            babelrc:false,
            presets:[
              // 添加preset-react
              require.resolve('@babel/preset-react'),
              [require.resolve('@babel/preset-env'),{modules:false}]
            ],
            cacheDirectory:true
          }
        }
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      filrname:'index.html',
      template:'src/index.html'
    })
  ]
}