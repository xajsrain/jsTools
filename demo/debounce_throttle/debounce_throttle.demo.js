import { debounce, throttle } from './debounce_throttle.base.js'

const Test_Debounce = () => {
  const ul = document.getElementById('ul')

  function clickHandle(e) {
    const ele = document.createElement('li')
    ele.innerText = '123456'
    ul.appendChild(ele);
  }
  const handle = debounce(clickHandle)
  document.getElementById('btn').addEventListener('click', handle)
}
Test_Debounce()


const Test_Throttle = () => {
  const box = document.getElementById('box')
  let strEle = ''
  for (let i = 0; i < 100; i++) {
    strEle += '<li>节流throttle</li>'
  }
  box.innerHTML = strEle
  const list = document.getElementById('list')
  const scrollHandle = (e) => {
    const li = document.createElement('li')
    li.innerText = 'scrollTop: ' + e.target.scrollTop
    list.appendChild(li)
  }
  const handle = throttle(scrollHandle)
  box.addEventListener('scroll', handle)
}
Test_Throttle()