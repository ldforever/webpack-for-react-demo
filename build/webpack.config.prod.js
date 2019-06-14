const merge = require('webpack-merge')

const common = require('./webpack.config.common.js')
const path = require('path');
const appSrc = path.resolve(__dirname, '../src')

const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'cheap-module-eval-source-map',
    output: {
        pathinfo: false,
        filename: 'js/[name].[chunkhash:8].js',  //  name代表entry对应的名字；hash自定加入，更新内容
        chunkFilename: 'js/[name].chunk.js',
        path: path.join(__dirname, '../dist')
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
    plugins: [
        new CleanWebpackPlugin(path.resolve(__dirname, '../dist')),
    ],
})
