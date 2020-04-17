const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const config = {
    mode: 'production',
    entry: {
        app: './src/index.js',
        vendors:'./src/vendors.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {test: /\.css$/, use: 'css-loader'},
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.html'})
    ]
};
module.exports = config;