const path = require('path');

// html-webpack-plugin 的使用
const HtmlPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlPlugin({
    template: 'src/index.html',     // 指定原文件的存放路径
    filename: './index.html'        // 指定生成文件的存放路径
})

// clean-webpack-plugin 的使用 默认将 dist 文件夹下的文件自动删除!
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const cleanWebpackPlugin = new CleanWebpackPlugin();


const VueLoaderPlugin = require('vue-loader/lib/plugin');
const vueLoaderPlugin = new VueLoaderPlugin()


module.exports = {

    // 两种可选模式: development 和 production; 开发阶段使用 development, 上线时使用 production, 这个会对 dist 下的 main.js 进行压缩!
    mode: 'development',

    // 自定义打包入口文件
    entry: path.join(__dirname, './src/index.js'),

    // 自定义打包输出文件
    output: {
        path: path.join(__dirname, './dist/'),    // 输出文件目录
        publicPath: '/dist/',                     // 资源文件引用的目录, 可以配置 CDN 地址! 
        filename: 'js/main.js'                    // 文件名称
    },

    devServer: {
        // contentBase: __dirname, -- 注意，这种写法已弃用
        open: true,             // 打包成功后, 自动打开浏览器
        host: '127.0.0.1',      // 实时打包所使用的主机地址
        port: 8888,             // 实时打包所使用的端口号
        static: {
            directory: path.join(__dirname, "/"),
        }
    },
    
    // 使用 webpack 时会加载和使用的插件
    plugins: [htmlPlugin, cleanWebpackPlugin, vueLoaderPlugin],

    // 使用 webpack loader 加载器
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.jpg|png|gif$/, use: ['url-loader?limit=10000&outputPath=images'] },    // 当图片的大小 <= limit(单位字节) 时才会转成 base64 的形式
            { test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/ },
            { test: /\.vue$/, use: ['vue-loader'], exclude: /node_modules/ },
        ]
    },
}