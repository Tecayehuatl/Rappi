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
                test: /\.(s*)css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
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
            },
            { 
                test: /\.(png|jpg|jpeg|gif|svg)$/, 
                use: 'url-loader?limit=25000' 
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue',
            'components': path.resolve(__dirname, './clientApp/components'),
            'libs': path.resolve(__dirname, './clientApp/js/libs'),
            'router': path.resolve(__dirname, './clientApp/router'),
            'views': path.resolve(__dirname, './clientApp/views'),
            'assets': path.resolve(__dirname, './clientApp/assets')
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
        new VueLoaderPlugin()
    ]
}