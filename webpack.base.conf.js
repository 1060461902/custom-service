const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const fs = require('fs');

let files = fs.readdirSync('./app');
let jstype = /\.(tsx|jsx|js)$/;
let entry = {}

files.forEach(function (item, index) {
    if (jstype.test(item)) {
        entry[item.split('.')[0]] = './app/' + item
    }
})

let htmlPlugin = (() => {
    let arr = [];
    for (key in entry) {
        arr.push(
            new HtmlPlugin({
                template: 'public/' + key + '.html',
                filename: key + '.html',
                chunks: [key]
            })
        );
    }
    return arr;
})();

module.exports = {
    entry: entry,
    output: {
        filename: 'js/[name].js',
        path: path.join(__dirname, 'dist')
    },
    plugins: [
        new ExtractTextPlugin('css/[name].css'),
    ].concat(htmlPlugin),
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [
                            "@babel/plugin-proposal-class-properties",
                            ["import", {
                                libraryName: "antd",
                                style: 'css'
                            }]
                        ],
                    }
                }
            },
            {
                test: /\.ts(x?)$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [
                            "@babel/plugin-proposal-class-properties"
                        ],
                    }
                }, {
                    loader: 'ts-loader'
                }]
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: 'url-loader?name=[path][name].[ext]'
            }
        ]
    }
}