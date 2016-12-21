var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
var DIST_PATH = path.join(__dirname, 'dist');
var APP_PATH = path.join(__dirname, 'app');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: {
        app: APP_PATH + '/index.js',
        vendor: 'lodash'
    },
    output: {
        path: DIST_PATH,
        filename: '[name]-[chunkhash].js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                include: APP_PATH,
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader?sourceMap!sass-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: APP_PATH + '/index.html',
            hash: true,
            chunks: ['app', 'vendor', 'bootstraper']
        }),
        new CommonsChunkPlugin({
            names: ['vendor', 'bootstraper']
        })
    ],
    devServer: {
        contentBase: DIST_PATH,
        inline: true,
        compress: true
    },
};
