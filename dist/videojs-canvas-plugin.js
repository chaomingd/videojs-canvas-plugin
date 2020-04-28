(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("video.js"));
	else if(typeof define === 'function' && define.amd)
		define(["video.js"], factory);
	else if(typeof exports === 'object')
		exports["VideoCanvasPlugin"] = factory(require("video.js"));
	else
		root["VideoCanvasPlugin"] = factory(root["videojs"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(video_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var window_requestanimationframe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var window_requestanimationframe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(window_requestanimationframe__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Plugin = video_js__WEBPACK_IMPORTED_MODULE_0___default.a.getPlugin('plugin');

var VideoCanvasPlugin = /*#__PURE__*/function (_Plugin) {
  _inherits(VideoCanvasPlugin, _Plugin);

  var _super = _createSuper(VideoCanvasPlugin);

  function VideoCanvasPlugin(player, options) {
    var _this;

    _classCallCheck(this, VideoCanvasPlugin);

    _this = _super.call(this, player, options);
    _this.stopDrawVideoFrame = null;
    _this.isDisposed = false;
    _this.videoWidth = 0;
    _this.videoHeight = 0;
    _this.player = player;
    _this._listeners = {};

    _this.initCanvasEl(player);

    return _this;
  }

  _createClass(VideoCanvasPlugin, [{
    key: "dispose",
    value: function dispose() {
      this.isDisposed = true;

      if (this.canvasEl) {
        this.cancelDrawVideoFrame();
        this.canvasEl.removeEventListener('click', this.canvasClick);
      }

      this.removeAllListener();
    }
  }, {
    key: "removeAllListener",
    value: function removeAllListener() {
      var _this2 = this;

      var _loop = function _loop(type) {
        var events = _this2._listeners[type];
        events.forEach(function (fn) {
          _this2.player.off(type, fn);
        });
      };

      for (var type in this._listeners) {
        _loop(type);
      }
    }
  }, {
    key: "addEvent",
    value: function addEvent(type, fn) {
      this.player.on(type, fn);
      !this._listeners[type] && (this._listeners[type] = []);

      this._listeners[type].push(fn);
    }
  }, {
    key: "initCanvasEl",
    value: function initCanvasEl(player) {
      var _this3 = this;

      var isVideoHidden = false;
      this.canvasClick = this.canvasClick.bind(this);
      this.addEvent('loadedmetadata', function () {
        if (_this3.isDisposed) return;
        if (_this3.canvasEl) return;
        _this3.canvasEl = document.createElement('canvas');
        _this3.rootEl = _this3.player.el();
        _this3.videoEl = _this3.rootEl.getElementsByTagName('video')[0];
        _this3.canvasEl.width = _this3.videoWidth = player.videoWidth();
        _this3.canvasEl.height = _this3.videoHeight = player.videoHeight();
        _this3.canvasEl.style.cssText = "\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%,-50%);\n      ";

        _this3.setCanvasContainInContainer();

        _this3.canvasEl.addEventListener('click', _this3.canvasClick);

        _this3.ctx = _this3.canvasEl.getContext('2d');

        _this3.rootEl.insertBefore(_this3.canvasEl, _this3.rootEl.firstElementChild);
      });
      this.addEvent('play', function () {
        console.log('play');
        _this3.stopDrawVideoFrame = _this3.drawVideoFrame();

        if (!isVideoHidden) {
          _this3.videoEl.style.width = '1px';
          _this3.videoEl.style.height = '1px';
          _this3.videoEl.style.visibility = 'hidden';
          isVideoHidden = true;
        }
      });
      this.addEvent('timeupdate', function () {
        if (!_this3.stopDrawVideoFrame) {
          _this3.stopDrawVideoFrame = _this3.drawVideoFrame();
        }
      });
      this.addEvent('pause', function () {
        console.log('pause');

        _this3.cancelDrawVideoFrame();
      });
      this.addEvent('fullscreenchange', this.setCanvasContainInContainer.bind(this));
      this.addEvent('error', function () {
        _this3.cancelDrawVideoFrame();
      });
      this.addEvent('abort', function () {
        console.log('abort');

        _this3.cancelDrawVideoFrame();
      });
      this.addEvent('waiting', function () {
        console.log('waiting');

        _this3.cancelDrawVideoFrame();
      });
      this.addEvent('ended', function () {
        _this3.cancelDrawVideoFrame();
      });
    }
  }, {
    key: "setCanvasContainInContainer",
    value: function setCanvasContainInContainer() {
      var containerRect;

      if (this.player.isFullscreen()) {
        containerRect = this.rootEl.getBoundingClientRect();
      } else {
        containerRect = window.screen;
      }

      var rect = this.contain(containerRect, this.canvasEl);
      this.canvasEl.style.width = rect.widthPercent;
      this.canvasEl.style.height = rect.heightPercent;
    }
  }, {
    key: "frameCall",
    value: function frameCall(callback) {
      // draw 30 times per second
      var count = 0,
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
        stop: function stop() {
          window.cancelAnimationFrame(id);
        }
      };
    }
  }, {
    key: "contain",
    value: function contain(container, rect) {
      var containerRatio = container.height / container.width;
      var rectRatio = rect.height / rect.width;
      var resultRect = {};

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
  }, {
    key: "drawVideoFrame",
    value: function drawVideoFrame() {
      var _this4 = this;

      this.cancelDrawVideoFrame();
      var canvas = this.canvasEl;
      return this.frameCall(function () {
        _this4.ctx.clearRect(0, 0, _this4.ctx.canvas.width, canvas.height);

        _this4.ctx.drawImage(_this4.videoEl, 0, 0, canvas.width, canvas.height);
      });
    }
  }, {
    key: "cancelDrawVideoFrame",
    value: function cancelDrawVideoFrame() {
      if (this.stopDrawVideoFrame) {
        this.stopDrawVideoFrame.stop();
        this.stopDrawVideoFrame = null;
      }
    }
  }, {
    key: "canvasClick",
    value: function canvasClick() {
      if (!this.player.paused()) {
        this.player.pause();
      }
    }
  }]);

  return VideoCanvasPlugin;
}(Plugin);

if (!video_js__WEBPACK_IMPORTED_MODULE_0___default.a.getPlugin('VideoCanvasPlugin')) {
  video_js__WEBPACK_IMPORTED_MODULE_0___default.a.registerPlugin('VideoCanvasPlugin', VideoCanvasPlugin);
}

/* harmony default export */ __webpack_exports__["default"] = (VideoCanvasPlugin);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/**
 * requestAnimationFrame polyfill v1.0.1
 * requires Date.now
 *
 * © Polyfiller 2015
 * Released under the MIT license
 * github.com/Polyfiller/requestAnimationFrame
 */
window.requestAnimationFrame || function () {

    'use strict';

    window.requestAnimationFrame = window.msRequestAnimationFrame
    || window.mozRequestAnimationFrame
    || window.webkitRequestAnimationFrame
    || function () {

        var fps = 60;
        var delay = 1000 / fps;
        var animationStartTime = Date.now();
        var previousCallTime = animationStartTime;

        return function requestAnimationFrame(callback) {

            var requestTime = Date.now();
            var timeout = Math.max(0, delay - (requestTime - previousCallTime));
            var timeToCall = requestTime + timeout;

            previousCallTime = timeToCall;

            return window.setTimeout(function onAnimationFrame() {

                callback(timeToCall - animationStartTime);

            }, timeout);
        };
    }();

    window.cancelAnimationFrame = window.mozCancelAnimationFrame
    || window.webkitCancelAnimationFrame
    || window.cancelRequestAnimationFrame
    || window.msCancelRequestAnimationFrame
    || window.mozCancelRequestAnimationFrame
    || window.webkitCancelRequestAnimationFrame
    || function cancelAnimationFrame(id) {
           window.clearTimeout(id);
       };

}();


/***/ })
/******/ ]);
});