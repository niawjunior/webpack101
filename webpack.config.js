import { ExtendedAPIPlugin } from '../Users/nj/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/webpack';

// import html-plugin
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    // source file
    entry: './src/app.js',
    // output file
    output: {
        // path
        path: 'dist',
        // filename
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            { test: /\.scss$/, use: ExtractTextPlugin.extract(['style-loader','css-loader','sass-loader'])}
        ]
    },
    // using plugins
    plugins: [
        new HtmlWebpackPlugin({
        // custom title
        title: 'Project',
        minify: {
            collapseWhitespace: true
        },
        hash: true,

        // custom html template
        template: './src/index.ejs',
    }),
    new ExtendedAPIPlugin({
        filename: 'app.css',
        disabled: false,
        allChunks: true
    })
]
}