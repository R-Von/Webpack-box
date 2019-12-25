const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry:'./src/index.jsx',
  resolve:{
    extensions:['.wasm','.js','.json','.jsx']
  },
  devServer:{
    contentBase:path.join(__dirname,'./src/'),
    port:4000,
    stats:{
      colors:true
    },
    hot:true
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      },
      {
        test:/\.jsx?$/,
        exclude:'/node_modules',
        use:{
          loader:'babel-loader',
          options:{
            babelrc:false,
            presets:[
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
      filename:"index.html",
      template:"./src/index.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}