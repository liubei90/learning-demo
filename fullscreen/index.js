import Vue from 'vue';
import fullScreen from './fullScreen';

// const fullscreenElement = document.createElement('div');
const fullscreenData = {
  orgInfo: null,
};
let inFullscreen = false;

/* eslint no-unused-vars: 0 */
const fullscreenApp = new Vue({
  data: fullscreenData,
  render(h) {
    return h(fullScreen, {
      props: {
        orgInfo: this.orgInfo,
      }
    });
  }
});
const fullscreenElement = fullscreenApp.$mount().$el;
console.log(fullscreenElement);

// fullscreenApp.$mount(fullscreenElement);

function requestFullscreen(element) {
  const fullScreen = element.requestFullscreen || element.mozRequestFullScreen || element.msRequestFullscreen || element.webkitRequestFullscreen;

  if (fullScreen) {
    fullScreen.call(element);
    inFullscreen = true;
  }
}

export const exitFullscreen = () => {
  const exit = document.exitFullscreen || document.msExitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen;

  if (exit) {
    exit.call(document);
    // inFullscreen = false;
  }
};

function listenExitFullScreen() {
  window.addEventListener('resize', () => {
    console.log('window resize');
    let isFull = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;

    if (!isFull && inFullscreen) {
      inFullscreen = false;
      document.querySelector('body').removeChild(fullscreenElement);
    }
  });
}

listenExitFullScreen();

const orgInfo = {};

export const addFullScreenInfo = (type, info) => {
  if (Array.isArray(info)) {
    orgInfo[type] = info.slice();
  } else {
    if (!orgInfo[type]) {
      orgInfo[type] = [];
    }

    orgInfo[type].push(info);
  }
};

export const removeFullScreenInfo = (type, info) => {
  if (!orgInfo[type]) return;

  if (!info) {
    delete orgInfo[type];
  } else {
    const infoIndex = orgInfo[type].indexOf(info);

    if (infoIndex !== -1) {
      orgInfo[type].splice(infoIndex, 1);
    }
  }
};

function stepFullscreen(type, direction) {
  if (!orgInfo[type]) return;

  const infoList = orgInfo[type];

  if (!fullscreenData.orgInfo) {
    fullscreenData.orgInfo = infoList[0];
  } else {
    const nextIndex = (infoList.indexOf(fullscreenData.orgInfo) + direction + infoList.length) % infoList.length;

    fullscreenData.orgInfo = infoList[nextIndex];
  }

  if (!inFullscreen) {
    document.querySelector('body').appendChild(fullscreenElement);
    requestFullscreen(fullscreenElement);
  }
}

export const nextFullScreen = (type, index) => {
  stepFullscreen(type, 1);
};

export const perFullScreen = (type, index) => {
  stepFullscreen(type, -1);
};
