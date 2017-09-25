const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    context: __dirname,
    entry: {
        app: './app.js',
    },
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(sass|scss)$/, //Check for sass or scss file names
                use: [
                  'style-loader',
                  'css-loader',
                  'sass-loader',
                ]
            }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin()
    ],
    devServer: {
        open: true,
        contentBase: __dirname + '/dist',
    }
};

module.exports = config;
