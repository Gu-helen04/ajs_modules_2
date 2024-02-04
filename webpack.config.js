const path = require('path');
const HtmpWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugun = require('mini-css-extract-plugin');

module.exports ={
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use: [
                    MiniCSSExtractPlugun.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins:[
        new HtmpWebpackPlugin({
            template: './src/index.html',
            filename: 'main.html'
        }),
        new MiniCSSExtractPlugun()
    ],
    devServer: {
        static: {
          directory: path.join(__dirname,'dist'),
        }
      }
}