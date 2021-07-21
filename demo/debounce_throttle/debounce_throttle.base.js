
// 防抖
export const debounce = (callback, delay = 300) => {
  let timer = null
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      callback.apply(this, arguments)
    }, delay);
  }
}

// 节流
export const throttle = (callback, time = 400) => {
  let needle = 0
  return function () {
    if(Date.now() - needle > time) {
      callback.apply(this, arguments)
      needle = Date.now()
    }else {
      return
    }
  }
}