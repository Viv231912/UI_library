const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');



module.exports = {
    //mode: 'development',
    entry: './src/index.js',
   
   plugins: [
     new HtmlWebpackPlugin({
       title: 'Development',
       template:'./dist/index.html',
       filename:'index.html'
     }),
    ],  
    output: {
        path: path.resolve(__dirname, 'dist/assets'),
        filename: 'bundle.js'
    },
    devServer: {
        static:  path.resolve(__dirname, 'dist'),
           
        
        
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