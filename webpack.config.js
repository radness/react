var webpack = require('webpack');

//이 객체를 module로 내보내겠다
module.exports = {
  entry: './src/index.js',

  output: {
    path: __dirname + '/public/',
    filename: 'bundle.js'
  },

  //개발 서버 설정.
  devServer: {
    hot: true,
    inline: true,
    host: '0.0.0.0',
    port: 4000,
    contentBase: __dirname + '/public/'
  },

  //로더를 통해서 es2015와 react를 javascript로 변환.
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot-loader', 'babel-loader?' + JSON.stringify({
        cacheDirectory: true,
        presets: ['es2015', 'react']
      })],
      exclude: /node_modules/,

    }]
  },

  //자동 reloading도 플러그인으로 해줌.
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
