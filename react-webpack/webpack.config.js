const path = require('path')


module.exports = {
  entry:"./src/index.jsx",
  resolve:{
    extensions:['.wasm','.mjs','.js','.json','.jsx']
  },
  module:{
    rules:[
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
  }
}