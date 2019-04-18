# 🐸🐸🐸webpack-for-react-demo

## 🐘项目介绍
> 这是一个使用webpack从零配置的项目，前端使用react


## 🐼项目启动
$`npm run dev`

## 🐠项目记录笔记

### 1.webpack4的零配置
> 首先初始化一个项目
>
`npm init -y` 注：npm init [--force|-f|--yes|-y|--scope]  其中-y参数是快速初始化。
>安装`webpack4` 和 `webpack-cli`， ps：webpack4和webpack-cli抽离里，所以需要分别安装
>
`npm install webpack webpack-cli -D`

>webpack4 支持0配置，默认`./src/index.js`为入口,webpack运行时，会根据mode的值采取不同的配置，mode两个可选值：`production`和`development`。没有传mode，会有警告。
>
```
"scripts": {         
    "build": "webpack --config ./build/webpack.config.js",
    "dev": "webpack --mode development"
  },
```
`development`和`production`的区别在于一个代码没压缩，一个有压缩和优化，执行`npm run dev`，就会生产一个`./dist/main.js`文件。    
### 2.自定义的webpack配置
> webpack的零配置显然不够用，所以创建`./build/webpack.config.js`,webpack的配置大概目录如下
>
```
module.exports = {
    entry: '',                           // 入口文件
    output: {},                          // 出口文件  
    module: {},                          // 模块相关配置
    plugins:[] ,                         // 插件相关配置  
    resolve: {},                         // 解析模块的可选项
    devServer: {},                       // 开发服务器相关配置
    devtool: 'inline-source-map',        // 开发工具， 比如启动source-map
    mode: 'development'                  // 模式配置 development/production      
}
```
> 然后开始添加内容
>

### 3.单入口的配置

```
module.exports = {
    entry: ['./src/index.js'], // 入口文件
    output: {
        filename: 'bundle.js', // 打包输出文件名
        path: path.resolve(__dirname, 'dist') // 打包输出目录
    },
}
```
### 4.多入口的配置
> 待更新

### 5.webpack-dev-server: webpack下配置静态服务器
>安装好以后更新`webpack.config.js`配置如下:
> 
```
module.exports = {
    // ...
    devServer: {
        contentBase: path.join(_dirname, 'dist'),    // 服务器资源的根目录， 不写默认bundle.js
        compress: true,                              // 服务器资源采用gzip压缩
        port：8075,                                  // 运行端口
        overlay: true,                               // 出错代码显示在html页面上
        hot: true                                    // 热加载
    };
}
```