# videojs-canvas-plugin
use canvas to render video for video.js


# install
npm i videojs-canvas-plugin -S

# usage
```javascript
  import videojs from 'video.js';
  import 'videojs-canvas-plugin';
  import 'video.js/dist/video-js.min.css' // import videojs css
  const player = videojs('videoId',{
    constrols: true,
    poster: 'xxx.jpg',
    //... some other config for videojs
  });
  player.VideoCanvasPlugin(); // use canvas render
```

# Use cases
  Video tag is at the top level when video is played by low version browser and app embedded browser on mobile phone,
Using canvas to render video can eliminate this side effect.



# License
this plugin is released under the MIT license.