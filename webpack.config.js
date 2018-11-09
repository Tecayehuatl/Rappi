const webpack = require("webpack")
const path = require("path")
const {VueLoaderPlugin} = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const isDevBuild = !(process.env.NODE_ENV && process.env.NODE_ENV === 'production')

/*****
console.log("+++++++++++++++++++++++++++++++++++")
console.log(process.env.NODE_ENV)
console.log("+++++++++++++++++++++++++++++++++++")
******/

module.exports = {
    //mode: isDevBuild ?'development': 'production',
    mode: 'development',
    entry: "./clientApp/app.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        publicPath: "/dist/",
        filename: "[name].js"
    },
    module:{
        rules: [
            {
                test: /\.css$/,
                use: ["vue-style-loader", "css-loader"]
            },
            {
                test: /\.vue$/,
                use: "vue-loader",
                include: /(clientApp)/
                
            },
            {
                test: /\.js$/,
                use: "babel-loader",
                include: /(clienApp)/,
                exclude: /(node_modules)/
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue',
            'components': path.resolve(__dirname, './clientApp/components'),
            'libs': path.resolve(__dirname, './clientApp/js/libs'),
            'router': path.resolve(__dirname, './clientApp/router'),
            'views': path.resolve(__dirname, './clientApp/views')
        }
    },
    devServer: {
        hot: true,
        watchOptions: {
            poll: true
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
    ]
}