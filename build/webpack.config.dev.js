const merge = require('webpack-merge')

const common = require('./webpack.config.common.js')
const path = require('path');
const appSrc = path.resolve(__dirname, '../src')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    output: {
        pathinfo: true,
        filename: 'bundle.js',  //  name代表entry对应的名字；hash自定加入，更新内容
        chunkFilename: '[name].chunk.js'
    },
    module:  {
        rules:[
            {
                test: /\.(js|jsx)$/,
                 exclude: /node_modules/, 
                 include: appSrc,
                /*  loader: ['babel-loader'],
                 options: {
                     presets: ["babel-preset-env", "babel-preset-react"]
                 }, */
                 use: [
                     'jsx-loader',
                    { 
                        loader: 'babel-loader',
                        options: {
                            presets: ["babel-preset-env", "babel-preset-react"]
                        },
                    }
                 ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: "url-loader",
                options: {
                    limit: 10000
                }
            },
            {
                test: /\.css$/,
                include: appSrc,
                use: [
                    'style-loader',
                    'css-loader'
                    /* {
                        loader: 'css-loader',
                        options: {
                            modules: false,
                            minimize: true
                        }
                    } */
                ]
            }
        ]
    },
    devServer: {
        host: '127.0.0.1',
        //port: 9000,                                   // 端口
        overlay: true,                               // 出错代码显示在html页面上
        progress: true
    },
})
