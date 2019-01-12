const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');

const base = require('./webpack.base.conf');

module.exports = merge(base,{
    mode:'development',
    devtool:'source-map',
    devServer:{
        contentBase: path.join(__dirname,'dist'),
        inline:true,
        hot:true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
})