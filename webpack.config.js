var webpack = require('webpack');
var path=require("path");
module.exports = {
    entry: './src/app.js',
    output: {
        filename: "bundle.js",
        path:path.resolve(__dirname,'build'),
        publicPath:"/"
    },
    devServer:{
        contentBase:'./build',
        hot:true
    },
    devtool:'inline-source-map',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                plugins: ['transform-runtime'],
                presets: ['es2015', 'react', 'stage-2']
            }
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        }]
    }
};
