const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: ''
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html', 
            template: './main.pug'
        }),
        new MiniCssExtractPlugin ({
            filename: '[name].css', 
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ],
    module: {
        rules: [{
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            }, {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            }, {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }, {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }, {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [{
                    loader: 'url-loader',
                    
                },{
                    loader: 'file-loader'
                }
                ]
                },
            {
                test: /images[\\\/].+\.(gif|png|jpe?g|svg)$/i,
                use: [{
                  loader: 'file-loader',
                  options: {
                    name: 'images/[name][hash].[ext]'
                  }
                }, {
                  loader: 'image-webpack-loader',
                  options: {
                    mozjpeg: {
                      progressive: true,
                      quality: 70
                    }
                  }
                },
                ],
              }, {
                test: /fonts[\\\/].+\.(eot|svg|ttf|woff|woff2)$/,
                use: {
                  loader: 'file-loader',
                  options: {
                    name: 'fonts/[name][hash].[ext]'
                  }
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                  loader: 'babel-loader'
                }]
              },
        ]
    },
    devServer: {
        overlay: true
    }
}