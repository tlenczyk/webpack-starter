const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
const DIST_PATH = path.join(__dirname, 'dist');
const APP_PATH = path.join(__dirname, 'app');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

module.exports = {
    devtool: 'source-map',
    entry: {
        app: APP_PATH + '/index.js',
        vendor: ['react', 'react-dom', 'react-router']
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
                    presets: [['es2015', {modules: false}], 'react']
                }
            },
            {
                test: /\.s?css$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader'],
                exclude: /(node_modules)\/react-toolbox/
            },
            {
                test: /(\.scss|\.css)$/,
                include : /(node_modules)\/react-toolbox/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: [
                        'css-loader?sourceMap&modules&importLoaders=2&localIdentName=[name]__[local]___[hash:base64:5]',
                        'sass-loader?sourceMap&sourceMapContents&outputStyle=expanded',
                    ],
                })
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
        new ExtractTextPlugin("[name].css"),
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
        port: 9000
    }
};
