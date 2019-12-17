const path = require('path')
const globby = require('globby')


const getEntry = ()=>{
  // 异步获取所有的路径
  const paths = globby.sync('./pages/*.js',{
    cwd:path.join(__dirname,'./src')
  })
  console.log(paths)
  const rs = {}
  paths.forEach(v=>{
    // 计算filename
    // console.log()
    const name = path.basename(v,'.js')
    let p = path.join('./src',v)
  })
}


getEntry()



// new HtmlWebpackPlugin({
//   title:'Index',
//   template:'./src/index.html',
//   filename:'index.html',
//   chunks:['index']
// }),

// entry:{
//   index:'./src/index.js',
//   list:'./src/list.js'
// },