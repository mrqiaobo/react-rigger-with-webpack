/**
 * in detail project, we can put common config code in webpack.common.js export as an object.
 * when use as dev env, include in webpack.dev.js and add dev env config.
 * when use as product env, include in webpack.prod.js and add prod config, such as uglifyJS.
 * We can also use logic judgement to judge the DEV_ENV or ENV is dev or prod environment and use differrent config.
 */

const path = require('path');
const root = __dirname;
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: path.resolve(root, 'src/main.js'), // if want to use multipul files, use entry: { app: '', vendors: '', ...}, at same time, must use commonsChunkPlugin
    output: {
        filename: 'bundle.js', // when the code project is bigger and bigger, seperate this to [name].[hash].js with commonsChunckPlugin, make it better to compress.
        path: path.resolve(root, 'dist')
    },

    module: {
        rules: [
            { 
                test: /\.jsx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            titlle: 'react demo', // this can be customed
            template: path.resolve(root, 'index.html')
        })
    ]

};

module.exports = config;