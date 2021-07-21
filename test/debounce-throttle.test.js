const {
  throttle
} = require('../lib/debounce_throttle')

test('throttle: 测试500毫秒内触发一次', () => {
  let i = 0;
  const fn = throttle(() => {
    i++
  })
  const start = Date.now();
  while (true) {
    fn();
    if (Date.now() - start >= 400) {
      break;
    }
  }
  expect(i).toBe(1);
})

test('throttle: 测试触发时this指向是否正确',()=> {
  let that;
  const fn = function () {
    that = this;
  }
  const cb = throttle(fn)
  const a = {name: 'a'};
  cb.call(a)
  expect(that === a).toBe(true);
})

