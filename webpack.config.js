const path = require('path')
const glob = require('glob-all')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const PurgecssPlugin = require('purgecss-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const mode = process.env.NODE_ENV || 'development'
const devMode = mode === 'development'

module.exports = {
  entry: './src/index.js',
  mode,
  devtool: devMode ? 'source-map' : false,
  module: {
    rules: [
      {
        test: /\.svelte$/,
        exclude: /(node_modules|public)/,
        use: {
          loader: 'svelte-loader',
          options: {
            skipIntroByDefault: true,
            nestedTransitions: true,
            emitCss: true,
            hotReload: true
          }
        }
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { importLoaders: 2 } },
          'postcss-loader',
          'sass-loader'
        ],
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({ verbose: true }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css'
    }),
    new PurgecssPlugin({
      paths: () => glob.sync([
        path.join(__dirname, './src/**/*.js'),
        path.join(__dirname, './src/**/*.html'),
        path.join(__dirname, './src/**/*.scss')
      ])
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public', 'index.html'),
    })
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: false,
        parallel: true,
        sourceMap: true
      })
    ]
  },
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].js',
    path: path.resolve(__dirname, './dist')
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    port: 9000,
    historyApiFallback: true
  }
}
