// API
function createAudio(node) {
  const dom = document.createElement('audio')
  node.appendChild(dom);
  return {
    el: dom,
    paused: true,
    setSrc(src) {
      dom.src = src;
    },
    play() {
      dom.play();
      this.paused = false;
    },
    pause() {
      dom.pause();
      this.paused = true;
      
    },
    jump() {},
    getLength() {},
    next() {},
    download() {},
    cycle() {},
    speed() {},
    quality() {},
    sound() {},
  }
}
