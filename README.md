# videojs-canvas-plugin
use canvas to render video for video.js


# install
npm i videojs-canvas-plugin -S

# usage
```javascript
  import videojs from 'video.js';
  import 'videojs-canvas-plugin';
  const player = videojs('videoId',{
    constrols: true,
    poster: 'xxx.jpg',
    //... some other config for videojs
  });
  player.VideoCanvasPlugin(); // use canvas render
```

# License
this plugin is released under the MIT license.