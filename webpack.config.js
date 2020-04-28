const path = require('path')

module.exports = {
  entry: './src/plugin.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'videojs-canvas-plugin.js',
    library: 'VideoCanvasPlugin',
    libraryTarget: 'umd',
  },
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      { 
        test: /\.(js|jsx|mjs)$/, 
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      }
    ]
  },
  externals: {
    'video.js': {
      commonjs: 'video.js',
      commonjs2: 'video.js',
      amd: 'video.js',
      root: 'videojs'
    }
  }
}