# 🌈 v-contextmenu-directive

> 一个基于 Vue2.x 的右键菜单插件。

## 📦 安 装
```bash
npm install v-contextmenu-directive
# or
yarn add v-contextmenu-directive
```

## 📚 如何使用？
```javascript
import Vue from 'vue'
import Contextmenu from 'v-contextmenu-directive'

Vue.use(Contextmenu)
```

### 基础用法：
```html
<!-- template -->
<div v-contextmenu="contextmenus"></div>
```
```javascript
// script
methods: {
  contextmenus() {
    return [
      {
        text: '剪切',
        subText: 'Ctrl + X',
      },
      {
        text: '复制',
        subText: 'Ctrl + C',
      },
      {
        text: '粘贴',
        subText: 'Ctrl + V',
      },
      { divider: true },
      {
        text: '删除',
        subText: 'Delete',
      },
    ]
  }
},
```

### 多级菜单：
```javascript
methods: {
  contextmenus() {
    return [
      {
        text: '二级菜单',
        children: [
          { text: '子菜单1' },
          { text: '子菜单2' },
          {
            text: '三级菜单',
            children: [
              { text: '子菜单1' },
              { text: '子菜单2' },
            ],
          },
        ],
      },
    ]
  }
}
```

### 结合[iconfont](https://www.iconfont.cn/)使用：
```html
<!-- index.html -->
<script src="//at.alicdn.com/t/font_2078977_5s0nf7y8b49.js"></script>
```
```javascript
methods: {
  contextmenus() {
    return [
      {
        text: '复制',
        subText: 'Ctrl + C',
        icon: 'icon-copy',
      },
      {
        text: '粘贴',
        subText: 'Ctrl + V',
        icon: 'icon-paste',
      },
    ]
  }
}
```

### 事件和点击对象：
```html
<!-- template -->
<div v-contextmenu="el => contextmenus(el)">
  {{msg}}
</div>
```
```javascript
// script
methods: {
  contextmenus(el) {

    // 获取触发右键菜单的dom；与action中的el一致
    // 注意：一般情况下你不应该向contextmenus方法传递动态参数，因为它不会自动更新，正确的做法是向触发右键菜单的dom上绑定dataset，然后在这里通过el.dataset来获取动态的值
    console.log(el)

    // 你可以在这里通过 return null 来禁用右键菜单
    // return null

    return [
      {
        text: '剪切',
        subText: 'Ctrl + X',
        action: () => this.msg = '你点击了剪切'
      },
      {
        text: '复制',
        subText: 'Ctrl + C',
        action: el => {
          this.msg = '你点击了复制'
          console.log(el)
        }
      },
    ]
  }
}
```

### dom激活右键菜单的状态：
挂载指令的dom在右键菜单被激活的情况下，会被添加一个contextmenu-active的class
```html
<!-- template -->
<div id="app" v-contextmenu="contextmenus"></div>
```

```css
#app {
  background-color: #fff;
}
#app.contextmenu-active {
  background-color: #f5f5f5;
}
```

## 📒 完整参数
- `text` string 菜单项文字
- `subText` string 菜单项文字补充
- `icon` string iconfont 图标
- `action` Function 菜单项点击后执行的方法
- `divider` bool 分割线，与其他参数不共存
- `children` array 子菜单
- `disable` bool 禁用菜单项
- `hide` bool 隐藏菜单项
- `iconPlacehoder` bool 图标占位，添加此项后文字左侧会预留出与图标大小一致的空间，让有图标和无图标的菜单项保持对齐