const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'CodeTransforText', // 全局挂载包的引用名
    libraryTarget: 'umd', //通用模式：支持用户通过es、common.js、AMD的方式引入npm包
    globalObject: 'this' // 为 webpack 4 新增属性，需要指定 global 的值为 ’this‘，否则会为默认值 ’self‘，无法在 nodejs 环境中使用。
  }
}