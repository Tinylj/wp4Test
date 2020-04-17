const webpack = require('webpack');
const config = {
    entry: {
        app: './src/index.js',
    },
    output: {
        filename: 'bundle.js',
        path: '/home/proj/public/assets'
    }
};
module.exports = config;