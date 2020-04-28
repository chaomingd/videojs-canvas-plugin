import videojs from 'video.js'
import '../src/plugin'
import 'video.js/dist/video-js.min.css'


const player = videojs('video',{
  controls: true,
  fluid: true,
})

player.VideoCanvasPlugin();