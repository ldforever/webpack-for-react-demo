const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //entry: ['./src/index.js'], // 入口文件
    entry: {
        app: path.join(__dirname, '../src/app.js')   //  app.js作为打包入口
    },
    output: {
        //filename: 'bundle.js', // 打包输出文件名
        filename: '[name].[hash].js',  //  name代表entry对应的名字；hash自定加入，更新内容
        path: path.join(__dirname, '../dist'), // 打包输出路径（必须绝对路径，否则报错）
        publicPath: './public'
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
    
    //plugin: [],

    //resolve: {},

    devServer: {
        contentBase: path.join(__dirname, 'dist'),    // 服务器资源的根目录， 不写默认bundle.js
        compress: false,                             // 服务器资源采用gzip压缩
        port: 9000,                                   // 端口
        overlay: true,                               // 出错代码显示在html页面上
        hot: true                                    // 热加载
    },

    devtool: '',

    //mode: 'production'
}

