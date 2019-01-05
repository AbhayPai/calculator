const Path = require("path");
const CssNano = require('cssnano');
const SetMeUp = require('./setmeup');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

let PathsToClean = [
    './../web/*',
];

let CleanOptions = {
    verbose:  true,
    allowExternal: true,
    exclude:  [
        './src/*',
        './cache/*',
        './vendor/*',
        './node_modules/*',
    ],
};

module.exports = {
    entry: new SetMeUp({
        Path: Path
    }).entry,

    output: {
        path: Path.join(__dirname, "./", "../", "web/", "js/"),
        filename: "[name].js"
    },

    resolve: {
        alias: new SetMeUp({
            Path: Path
        }).alias
    },

    module:{
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: [
                'babel-loader',
                'eslint-loader'
            ],
        }, {
            test: /\.scss$/,
            use: [
                'style-loader',
                MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: {
                        minimize: true,
                        sourceMap: true
                    }
                },
                {
                    loader: "sass-loader"
                }
            ]
        }, {
            test: /\.(jpe?g|png|gif|ico)$/i,
            loader: "file-loader"
        }, {
            test: /\.woff|woff2|eot|ttf|svg$/,
            use: {
                loader: 'url-loader',
            }
        }, {
            test: /\.handlebars$/,
            loader: "handlebars-loader"
        }
    ]},

    plugins: [
        new StyleLintPlugin({
            configFile: './.stylelintrc',
            files: [
                './src/assets/scss/**/*.scss'
            ]
        }),

        new CleanWebpackPlugin(
            PathsToClean,
            CleanOptions
        ),

        new UglifyJsPlugin({
            uglifyOptions: {
                compress: true,
            }
        }),

        new MiniCssExtractPlugin({
            filename: "./../css/[name].css"
        }),

        new CopyWebpackPlugin([
            new SetMeUp({
                Path: Path
            }).copyFiles
        ]),

        new OptimizeCssAssetsPlugin({
            cssProcessor: CssNano,
            cssProcessorPluginOptions: {
                preset: ['default', { discardComments: { removeAll: true } }],
            },
            canPrint: true
        }),
    ].concat(
        new SetMeUp({
            Path: Path,
            HtmlWebpackPlugin: HtmlWebpackPlugin
        }).createHtml()
    )
};
