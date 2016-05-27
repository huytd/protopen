var webpack = require('webpack');
module.exports = {
    entry: {
        filename: "./main.js"
    },
    output: {
        filename: "./bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','react']
                }
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.html$/,
                loader: "raw-loader"
            }
        ]
    },
    sassLoader: {
        includePaths: [ require('bourbon').includePaths ]
    }
};
