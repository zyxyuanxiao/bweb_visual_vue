// js 文件
import Vue from 'vue'
import './loading.scss'

Vue.directive('loading', {
  bind: (el, binding) => {
    const tempDiv = document.createElement('div')
    tempDiv.className = 'custom-loading'
    const round = document.createElement('div')
    round.className = 'custom-loading-round'
    tempDiv.appendChild(round)
    el.loadingElement = tempDiv
    const curStyle = window.getComputedStyle(el)
    const position = curStyle.position
    if (position === 'absolute' || position === 'relative') {
      el.style.position = position
    } else {
      el.style.position = 'relative'
    }
    if (binding.value) {
      el.appendChild(tempDiv)
    }
  },
  update: (el, binding) => {
    if (binding.value) {
      if (el.loadingElement.parentNode === null) {
        el.appendChild(el.loadingElement)
      }
    } else {
      if (el === el.loadingElement.parentNode) {
        el.removeChild(el.loadingElement)
      }
    }
  },
  unbind: (el) => {
    if (el.loadingElement.parentNode === el) {
      el.removeChild(el.loadingElement)
    }
    el.loadingElement = null
  }
})
