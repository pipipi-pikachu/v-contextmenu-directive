import Vue from 'vue'
import ContextmenuComponent from './Contextmenu'

const ContextmenuConstructor = Vue.extend(ContextmenuComponent)
const __ctxmenu__ = '__ctxmenu__'

const contextmenuListener = ({ el, event, binding }) => {
  event.stopPropagation()
  event.preventDefault()

  let instance, mask

  const menus = binding.value(el)
  if(!menus) return

  const isDark = binding.modifiers.dark

  const removeContextMenu = () => {
    if(instance) {
      document.body.removeChild(instance.$el)
      instance = null
    }
    if(mask) {
      mask.removeEventListener('contextmenu', handleMaskContextmenu)
      mask.removeEventListener('click', removeContextMenu)
      document.body.removeChild(mask)
      mask = null
    }
    el.classList.remove('contextmenu-active')
    document.body.removeEventListener('scroll', removeContextMenu)  
    window.removeEventListener('resize', removeContextMenu)
  }

  const handleMaskContextmenu = event => {
    event.preventDefault()
    removeContextMenu()
  }

  removeContextMenu()
  
  mask = document.createElement('div')
  mask.style = `
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9998;
  `
  document.body.appendChild(mask)

  instance = new ContextmenuConstructor({
    el: document.createElement('div'),
  })
  instance.axis = { x: event.x, y: event.y }
  instance.el = el
  instance.menus = menus
  instance.isDark = isDark
  instance.removeContextMenu = removeContextMenu
  
  document.body.appendChild(instance.$el)
  el.classList.add('contextmenu-active')

  mask.addEventListener('contextmenu', handleMaskContextmenu)
  mask.addEventListener('click', removeContextMenu)
  document.body.addEventListener('scroll', removeContextMenu)
  window.addEventListener('resize', removeContextMenu)
}

const ContextmenuDirective = {
  bind(el, binding) {
    el[__ctxmenu__] = event => contextmenuListener({ el, event, binding })
    el.addEventListener('contextmenu', el[__ctxmenu__])
  },

  unbind(el) {
    if(el && el[__ctxmenu__]) {
      el.removeEventListener('contextmenu', el[__ctxmenu__])
      delete el[__ctxmenu__]
    }
  },
}

export default {
  install(Vue) {
    Vue.directive('contextmenu', ContextmenuDirective)
  },
}