module.exports = {
  entry: [
    // 'webpack-dev-server/client?http://localhost:8081',
    'webpack/hot/only-dev-server',
    './client/src/index.js'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'react-hot-loader!babel-loader'
    }]
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
    hot: true,
    proxy: {
      '/data': {
        target: 'http://localhost:8081'
      }
    }
  }
};
