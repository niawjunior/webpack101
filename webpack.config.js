var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");

module.exports = {
    // source file
    entry: './src/app.js',
    // output file
    output: {
        // path
        path: path.resolve(__dirname, "build"),
        // filename
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/, 
                use: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: ['css-loader','sass-loader'],
                    publicPath: '/dist'
                })
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        open: true
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
        new ExtractTextPlugin({
            filename: 'app.css',
            disabled: false,
            allChunks: true
        })
    ]
}