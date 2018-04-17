const webpack = require('webpack');
const path = require('path');


module.exports = {

  /* 入口 */
  entry: [
    'react-hot-loader/patch',
    path.join(__dirname, 'src/index.js'),
  ],

  /* 输出到dist文件夹，输出文件名字为bundle.js */
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: 'http://zing.com:3030',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        use: ['babel-loader'],
        /* use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-0', 'react'],
            plugins: [['import', { libraryName: 'antd', style: 'css' }], ['react-hot-loader/babel']],
          },
        }, */
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: true, // 页面出错不会弹出404页面
    host: 'zing.com', // 默认localhost,如果想服务器在外部访问，设置为0.0.0.0
    port: 3030, // 默认8080
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        pathRewrite: { '^/api': '' },
      },
    },
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'inline-source-map',
};
