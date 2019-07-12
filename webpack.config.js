const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const $ = require('jquery');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: ''
    },
    devServer: {
        stats: 'errors-only',
        overlay: true,
        contentBase: './dist',
        index: 'index.html', // 'ui-kit.html'
        index: 'landing_page.html'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html', 
            template: './src/main.pug'
        }),
        new HtmlWebpackPlugin({
            filename: 'landing_page.html', 
            template: './src/landing_page/landing_page.pug'
        }),
        new MiniCssExtractPlugin ({
            filename: '[name].css', 
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "window.$": "jquery",
            noUiSlider: 'nouislider'
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