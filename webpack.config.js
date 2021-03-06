const webpack = require('webpack')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

const mode = process.env.NODE_ENV || 'development'
const prod = mode === 'production'

module.exports = {
  entry: {
    bundle: ['./src/main.ts'],
  },
  resolve: {
    alias: {
      'filepond-plugin-image-preview': path.resolve('node_modules', 'filepond-plugin-image-preview'),
      'filepond': path.resolve('node_modules', 'filepond'),
      'filepond-plugin-image-edit': path.resolve('node_modules', 'filepond-plugin-image-edit'),
      
    },
    alias: {
      svelte: path.resolve('node_modules', 'svelte'),
    },
    extensions: ['.mjs', '.tsx', '.ts', '.js', '.svelte', '.svx'],
    mainFields: ['svelte', 'browser', 'module', 'main'],
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
    chunkFilename: '[name].[id].js',
  },
  module: {
    rules: [
      {
        test: /.(svelte|html|svx)$/,
        exclude: [
          /node_modules/,
          /recycle/
        ],
        use: {
          loader: 'svelte-loader',
          options: {
            emitCss: true,
            hotReload: true,
            preprocess: require('./svelte.config.js').preprocess,
          },
        },
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader', options: {
                importLoaders: 2},
            },
            'postcss-loader'
          ],
        }),
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: [
          /node_modules/,
          /recycle/
        ],
      },
    ],
  },
  externals: {
    // "svelte-filepond": 'svelte-filepond'
  },
  mode: process.env.NODE_ENV,
  plugins: [
    new ExtractTextPlugin('bundle.css', {
      disable: process.env.NODE_ENV === 'development',
    })
  ],
  devtool: prod ? false : 'source-map',
  devServer: {
    compress: true,
    disableHostCheck: true,
    contentBase: [path.join(__dirname, 'dist'), path.join(__dirname, 'src/dapps'), path.join(__dirname, 'static')],
    port: 5000,
    host: "0.0.0.0",
    https: true,
    historyApiFallback: {
      index: 'index.html'
    },
    watchOptions: {
      ignored: [
        path.resolve(__dirname, '-recycle')
      ]
    }
  }

}