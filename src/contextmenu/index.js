import Vue from 'vue'
import ContextmenuComponent from './Contextmenu'

const ContextMenuConstructor = Vue.extend(ContextmenuComponent)
let instance
let mask

const ContextMenuDirective = {
  bind(el, binding) {
    el.addEventListener('contextmenu', e => {
      e.stopPropagation()
      e.preventDefault()

      const menus = binding.value(el)
      if(!menus) return
  
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

      const handleMaskContextmenu = e => {
        e.preventDefault()
        removeContextMenu()
      }

      removeContextMenu()
      
      mask = document.createElement('div')
      mask.style = 'position: fixed; left: 0; top: 0; width: 100vw; height: 100vh; z-index: 9998;'
      document.body.appendChild(mask)

      instance = new ContextMenuConstructor({
        el: document.createElement('div'),
      })
      instance.axis = { x: e.x, y: e.y }
      instance.el = el
      instance.menus = menus
      instance.removeContextMenu = removeContextMenu
      
      document.body.appendChild(instance.$el)
      el.classList.add('contextmenu-active')

      mask.addEventListener('contextmenu', handleMaskContextmenu)
      mask.addEventListener('click', removeContextMenu)
      document.body.addEventListener('scroll', removeContextMenu)
      window.addEventListener('resize', removeContextMenu)
    })
  }
}

export default {
  install: function(Vue) {
    Vue.directive('contextmenu', ContextMenuDirective)
  }
}