const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
    //mode: 'development',
    entry: './src/index.js',
    devServer: {
        static:'./dist'
    },
//    plugins: [
//      new HtmlWebpackPlugin({
//        title: 'Development',
//        template:'./dist/assets/index.html',
//        filename:'index.html'
//      }),
//     ],  
    output: {
        path: path.resolve(__dirname, 'dist/assets'),
        filename: 'bundle.js'
    },
   module:{
    rules:[
        {
            test: /\.js$/,
            exclude:/node_modules/,
            use: {
                loader: 'babel-loader',
                options:{
                    presets:[ 
                        ['@babel/preset-env']
                    ]
                }
            }
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'] 
        }
    ]
   }
}