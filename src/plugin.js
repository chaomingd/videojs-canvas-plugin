import videojs from 'video.js';
import 'window.requestanimationframe';
const Plugin = videojs.getPlugin('plugin');

class VideoCanvasPlugin extends Plugin {
  constructor(player, options) {
    super(player, options);
    this.stopDrawVideoFrame = null;
    this.isDisposed = false;
    this.videoWidth = 0;
    this.videoHeight = 0;
    this.player = player;
    this._listeners = {}
    this.initCanvasEl(player);
  }

  dispose() {
    this.isDisposed = true;
    if (this.canvasEl) {
      this.cancelDrawVideoFrame();
      this.canvasEl.removeEventListener('click', this.canvasClick);
    }
    this.removeAllListener();
  }

  removeAllListener() {
    for (let type in this._listeners) {
      let events = this._listeners[type];
      events.forEach(fn => {
        this.player.off(type, fn);
      })
    }
  }

  addEvent(type, fn) {
    this.player.on(type, fn);
    !this._listeners[type] && (this._listeners[type] = []);
    this._listeners[type].push(fn);
  }


  initCanvasEl(player) {
    let isVideoHidden = false;
    this.canvasClick = this.canvasClick.bind(this);
    this.addEvent('loadedmetadata', () => {
      if (this.isDisposed) return;
      if (this.canvasEl) return;
      this.canvasEl = document.createElement('canvas');
      this.rootEl = this.player.el();
      this.videoEl = this.rootEl.getElementsByTagName('video')[0];
      this.canvasEl.width = this.videoWidth = player.videoWidth();
      this.canvasEl.height = this.videoHeight = player.videoHeight();
      this.canvasEl.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
      `;
      this.setCanvasContainInContainer();
      this.canvasEl.addEventListener('click', this.canvasClick);
      this.ctx = this.canvasEl.getContext('2d');
      this.rootEl.insertBefore(this.canvasEl, this.rootEl.firstElementChild);
    })
    this.addEvent('play', () => {
      console.log('play')
      this.stopDrawVideoFrame = this.drawVideoFrame();
      if (!isVideoHidden) {
        this.videoEl.style.width = '1px';
        this.videoEl.style.height = '1px';
        this.videoEl.style.visibility = 'hidden';
        isVideoHidden = true;
      }
    })
    this.addEvent('timeupdate', () => {
      if (!this.stopDrawVideoFrame) {
        this.stopDrawVideoFrame = this.drawVideoFrame();
      }
    })
    this.addEvent('pause', () => {
      console.log('pause')
      this.cancelDrawVideoFrame();
    })
    this.addEvent('fullscreenchange', this.setCanvasContainInContainer.bind(this));
    this.addEvent('error', () => {
      this.cancelDrawVideoFrame();
    })
    this.addEvent('abort', () => {
      console.log('abort')
      this.cancelDrawVideoFrame();
    })
    this.addEvent('waiting', () => {
      console.log('waiting')
      this.cancelDrawVideoFrame();
    })
    this.addEvent('ended', () => {
      this.cancelDrawVideoFrame();
    })
  }
  setCanvasContainInContainer() {
    let containerRect;
    if (this.player.isFullscreen()) {
      containerRect = this.rootEl.getBoundingClientRect();
    } else {
      containerRect = window.screen;
    }
    let rect = this.contain(containerRect, this.canvasEl);
    this.canvasEl.style.width = rect.widthPercent;
    this.canvasEl.style.height = rect.heightPercent;
  }
  frameCall(callback) { // draw 30 times per second
    let count = 0,
      id = null;
    function frame() {
      if (count === 1) {
        callback();
        count = -1;
      }
      count++;
      id = window.requestAnimationFrame(frame);
    }
    id = window.requestAnimationFrame(frame);
    return {
      stop: () => {
        window.cancelAnimationFrame(id);
      }
    };
  }
  contain(container, rect) {
    let containerRatio = container.height / container.width;
    let rectRatio = rect.height / rect.width;
    let resultRect = {};
    if (rectRatio < containerRatio) {
      resultRect.width = container.width;
      resultRect.height = resultRect.width * rectRatio;
      resultRect.widthPercent = '100%';
      resultRect.heightPercent = 'auto';
    } else {
      resultRect.height = container.height;
      resultRect.width = resultRect.height / rectRatio;
      resultRect.widthPercent = 'auto';
      resultRect.heightPercent = '100%';
    }
    return resultRect;
  }
  drawVideoFrame() {
    this.cancelDrawVideoFrame();
    var canvas = this.canvasEl;
    return this.frameCall(() => {
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, canvas.height);
      this.ctx.drawImage(this.videoEl, 0, 0, canvas.width, canvas.height);
    });
  }
  cancelDrawVideoFrame() {
    if (this.stopDrawVideoFrame) {
      this.stopDrawVideoFrame.stop();
      this.stopDrawVideoFrame = null;
    }
  }
  canvasClick() {
    if (!this.player.paused()) {
      this.player.pause();
    }
  }
}

if (!videojs.getPlugin('VideoCanvasPlugin')) {
  videojs.registerPlugin('VideoCanvasPlugin', VideoCanvasPlugin);
}

export default VideoCanvasPlugin;