import babel from 'rollup-plugin-babel'

export default {
  input: 'src/plugin.js',
  output: {
    file: 'dist/videojs-canvas-plugin.js',
    format: 'umd',
    name: 'VideoCanvasPlugin',
    globals: {
      'video.js': 'videojs',
    }
  },
  external: [
    'video.js'
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**' // 只编译我们的源代码
    })
  ]
}