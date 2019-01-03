const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.js',
            filename: 'file-load.js',
            inject: false,
        })
    ],
    output: {
        filename: '[hash].js'
    }
}