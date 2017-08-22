/**
 * Created by Weil on 2017/5/10.
 */
const webpack = require('webpack');
const path = require('path');
//自动产出html文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
//自动打开浏览器
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
let isDev = process.env.NODE_ENV === 'develop'; // 是否是开发环境

module.exports = {
  //多入口
  entry: {
    //所有的页面都使用用到的内容
    vendor: ['babel-polyfill', 'react', 'react-dom', 'redux', 'react-redux', 'react-router-dom'],
    //主要的文件
    main: './page/main/main.js',
    //登录页面
    login: './page/login/login.jsx'
  },
  //输出
  output: {
    //打包后的文件存放的路径
    path: path.resolve(__dirname, '../dist'),
    // publicPath: '/',
    //公开路径
    publicPath: isDev ? 'http://localhost:9333/' : '/',
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: path.resolve(__dirname, '../node_modules/'),
        use: 'babel-loader'
      },
      {
        test: /\.(less|css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      }
    ]
  },
  resolve: {
    alias: {//提供目录的别名
      '@': __dirname
    },
    //提供扩展名
    extensions: ['.js', '.jsx']
  },
  //提供源码和打包后文件的映射
  devtool: isDev ? 'cheap-module-eval-source-map' : '',
  context: __dirname,
  //配置开发服务器 webpack-dev-server
  devServer: {
    hot: true,//热替换
    port: 9333,//端口号
    headers: {//允许跨域
      'Access-Control-Allow-Origin': '*'
    },
    proxy: {
      // http://localhost:9333/login
      // http://localhost:8333/login
      '/api': {
        target: 'http://localhost:8333/api',
        pathRewrite: {"^/api" : ""}
      },
      '/login': {
        target: 'http://localhost:8333/login',
        pathRewrite: {"^/login" : ""}
      }
    }
  },
  plugins: [
    new OpenBrowserPlugin({ url: `http://${"localhost"}:9333/` }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV':
        isDev ? JSON.stringify('develop') : JSON.stringify('production')
    }),
    //optimize优化 CommonsChunk 公用的代码块
    //会把多个页面里的公共代码提供出来变成一个文件
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: '[name].bundle.js',
      minChunks: Infinity
    }),
    new HtmlWebpackPlugin({
      template: './template/index.html',
      filename: 'index.html',
      chunks: ['vendor', 'main'],
      inject: true
    }),
    new HtmlWebpackPlugin({
      template: './template/login.html',
      filename: 'login.html',
      chunks: ['vendor', 'login'],
      inject: true
    })
  ]
};















