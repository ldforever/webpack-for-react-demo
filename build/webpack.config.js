const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['./src/index.js'], // 入口文件
    output: {
        filename: 'bundle.js', // 打包输出文件名
        path: path.resolve(__dirname, 'dist') // 打包输出路径（必须绝对路径，否则报错）
    },
    module:  {
        rules:[
            {
                test: /\.js$/,
                 exclude: /node_modules/, 
                 use: [
                    { loader: "babel-loader"},
                    { loader: "jsx-loader"}
                 ]
            }
        ]
    },
    
    plugin: [],

    resolve: {},

    devServer: {
        contentBase: path.join(_dirname, 'dist'),    // 服务器资源的根目录， 不写默认bundle.js
        compress: true,                             // 服务器资源采用gzip压缩
        port: 8075,                                   // 端口
        overlay: true,                               // 出错代码显示在html页面上
        hot: true                                    // 热加载
    },

    devtool: '',

    mode: 'development'
}

