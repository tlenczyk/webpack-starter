const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
const DIST_PATH = path.join(__dirname, 'dist');
const APP_PATH = path.join(__dirname, 'app');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-source-map',
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
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /(\.scss|\.css)$/,
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
    ],
    devServer: {
        contentBase: DIST_PATH,
        inline: true,
        compress: true
    }
};
