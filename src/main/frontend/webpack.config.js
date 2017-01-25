const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
const DIST_PATH = path.join(__dirname, 'dist');
const APP_PATH = path.join(__dirname, 'app');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

module.exports = {
    devtool: 'source-map',
    entry: {
        app: APP_PATH + '/index.js',
        vendor: ['react', 'react-dom', 'react-router', 'redux', 'react-redux', 'redux-thunk', 'redux-logger']
    },
    output: {
        path: DIST_PATH,
        filename: '[name]-[chunkhash].js'
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: APP_PATH,
                exclude: '/node_modules/',
                loader: 'babel-loader',
                options: {
                    presets: [['es2015', {modules: false}], 'react', 'stage-0'],
                    plugins: ['transform-decorators-legacy', 'react-html-attrs']
                }
            },
            {
                test: /\.css$/,
                exclude: /(node_modules)\/react-toolbox/,
                loaders: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.css$/,
                include : /(node_modules)\/react-toolbox/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            sourceMap: true,
                            importLoaders: 1,
                            localIdentName: "[name]--[local]--[hash:base64:8]"
                        }
                    },
                    "postcss-loader"
                ]
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
        }),
        new webpack.LoaderOptionsPlugin({
            debug: true
        }),
        new UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false,
                unused: true,
                dead_code: true
            }
        })
    ],
    devServer: {
        contentBase: DIST_PATH,
        inline: true,
        compress: true,
        port: 9000,
        proxy: {
            "/api": "http://localhost:8080"
        }
    }
};
