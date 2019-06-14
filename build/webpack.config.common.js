const path = require('path');
const appSrc = path.resolve(__dirname, '../src')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //entry: ['./src/index.js'], // 入口文件
    entry: {
        app: path.join(__dirname, '../src/index.js')   //  app.js作为打包入口
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
        new HtmlWebpackPlugin({
            file: 'index.html',
            template: './index.html',
            minify: {
                collapseWhitespace: true
            }
        })
    ],
}

