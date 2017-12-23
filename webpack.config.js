var path = require('path');
module.exports = {
  entry: [
    // 'webpack-dev-server/client?http://localhost:8081',
    'webpack/hot/only-dev-server',
    './client/src/containers/index.js.js'
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
      },
      {
        test: /\.less$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "less-loader", options: { strictMath: true, noIeCompat: true }
        }]
       }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + 'client/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './client/dist',
    port: 8000,
    hot: true,
    proxy: {
      '/data': {
        target: 'http://localhost:8081'
      }
    }
  }
};
