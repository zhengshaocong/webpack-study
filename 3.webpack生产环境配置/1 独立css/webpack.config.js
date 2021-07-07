const {resolve}=require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin=require('mini-css-extract-plugin')
module.exports={
    entry:'./src/index.js',
    output:{
        filename:'js/built.js',
        path:resolve(__dirname,'build')
    },
    module:{
        rules:[
            {
                test:/\.less$/,
                use:[
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),//默认创建一个白版模板html 打包引入所有资源
        new MiniCssExtractPlugin({
            filename:'css/built.css'
        })
    ],
    mode:'development'
}