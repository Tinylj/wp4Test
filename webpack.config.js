const webpack = require('webpack');
const path = require('path');
const config = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js'
    }
};
module.exports = config;