// import html-plugin
var HtmlWebpackPlugin = require('html-webpack-plugin');

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
    // using plugins
    plugins: [new HtmlWebpackPlugin({
        // custom title
        title: 'Project',
        minify: {
            collapseWhitespace: true
        },
        hash: true,

        // custom html template
        template: './src/index.ejs',
    })]
}