const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: './index.html',
})

const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const cleanPlugin = new CleanWebpackPlugin()

module.exports = {
    // 打包模式, development, production
    // devtool 省略将不输出报错文件和行数且不暴露源码
    mode: 'development',
    devtool: 'eval-source-map', // 建议配合 development 使用，输出报错文件和行数且暴露源码

    // mode: 'production',
    // devtool: 'nosources-source-map', // 建议配合 production 使用，输出报错文件和行数且不暴露源码

    // 打包配置
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'js/t.js',
    },

    // 插件
    // htmlWebpackPlugin 复制文件
    // cleanPlugin 清理打包目录下的历史文件
    plugins: [htmlWebpackPlugin, cleanPlugin],

    // 开发服务
    devServer: {
        // 默认打开浏览器
        open: true,
        // 默认监听的 host
        host: '127.0.0.1',
        // 默认监听的端口
        port: 8999,
    },

    module: {
        rules: [
            // css 打包
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            // less 打包
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            // 处理样式表中和 url 路径相关的文件
            {
                test: /\.jpg|jpeg|png|gif|webp$/,
                // <= limit 就会被转为base64，用以减少图片请求
                // use: 'url-loader?limit=6710'
                // 使用loader对象的形式
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 6710,
                        outputPath: 'images',
                    },
                },
            },
            // 当前webpack可以不需要下面的 es6 高级语法loader了
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ['@babel/plugin-proposal-class-properties'],
                    },
                },
            },
        ]
    }
}