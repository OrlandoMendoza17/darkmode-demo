const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    // publicPath: '/',
    assetModuleFilename: 'assets/images/[hash][ext][query]',
  },
  context: __dirname,
  mode: 'development',
  devtool: 'source-map',
  devServer:{
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
    compress: true,
    open: true,
    port: 3006,
  },
  resolve:{
    extensions: ['.js', '.jsx'],
    alias:{
      "@pages": path.resolve(__dirname, 'src/pages'),
      "@utils": path.resolve(__dirname, 'src/utils'),
      "@assets": path.resolve(__dirname, 'src/assets'),
      "@images": path.resolve(__dirname, 'src/assets/images'),
      "@components": path.resolve(__dirname, 'src/components'),
      "@store": path.resolve(__dirname, 'src/store'),
    }
  },
  module:{
    rules:[
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {loader: 'html-loader'}
        ]
      },
      {
        test: /\.s?css$/i,
        use:[
          // MiniCssExtractPlugin.loader,
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(png|svg)/,
        type: 'asset/resource'
      },
      // {
      //   test: /\.(jpg|jpeg|png|gif|jfif|woff|eot|ttf|svg|mp4|webm)$/,
      //   use: {
      //     loader: 'url-loader',
      //     options: {
      //       limit: 10000,
      //       fallback: {
      //         loader: "file-loader",
      //         options: {
      //           name: "img/[name].[ext]",
      //           // name: "../[path][name].[ext]",
      //         }
      //       }
      //     }
      //   }
      // },
      // {
      //   test: /\.(jpg|jpeg|png|gif|jfif|woff|eot|ttf|svg|mp4|webm)$/,
      //   use: {
      //     loader: "file-loader",
      //     options: {
      //       name: "img/[name].[ext]",
      //       // name: "../[path][name].[ext]",
      //     }
      //   }
      // }
    ]
  },
  plugins:[
    // new MiniCssExtractPlugin({
    //   filename: '[name].css'
    // }),
    new CopyWebpackPlugin({
      patterns:[
        {
          from: path.resolve(__dirname, 'src/assets/images'),
          to: 'assets/images'
        }
      ]
    }),
    // new CleanWebpackPlugin({
    //   cleanOnceBeforeBuildPatterns:[
    //     path.resolve(__dirname, 'dist/**')
    //   ]
    // }),
    new HtmlWebpackPlugin({
      inject: 'body',
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
      favicon: './src/assets/images/favicon-32x32.png'
    })
  ]
}