<template>
  <div id="app" v-contextmenu="contextmenus">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      msg: '在空白区域点击鼠标右键',
      switchState: false,
    }
  },
  methods: {
    contextmenus() {
      return [
        {
          text: '剪切',
          subText: 'Ctrl + X',
          icon: 'icon-scissor',
          action: () => this.msg = '你点击了剪切'
        },
        {
          text: '复制',
          subText: 'Ctrl + C',
          icon: 'icon-copy',
          action: () => this.msg = '你点击了复制'
        },
        {
          text: '粘贴',
          subText: 'Ctrl + V',
          icon: 'icon-paste',
          action: () => this.msg = '你点击了粘贴'
        },
        { divider: true },
        {
          text: '多级菜单',
          icon: 'icon-number',
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
        {
          text: '选项开关',
          icon: 'icon-number',
          children: [
            {
              text: '打开',
              icon: this.switchState ? 'icon-check' : '',
              iconPlacehoder: true,
              disable: this.switchState,
              action: () => this.switchState = true
            },
            {
              text: '关闭',
              icon: !this.switchState ? 'icon-check' : '',
              iconPlacehoder: true,
              disable: !this.switchState,
              action: () => this.switchState = false
            },
          ],
        },
        { divider: true },
        {
          text: '删除',
          subText: 'Delete',
          icon: 'icon-delete',
          action: e => {
            this.msg = '你点击了删除'
            console.log(e)
          }
        },
      ]
    }
  },
}
</script>

<style lang="scss">
html, body {
  height: 100%;
  padding: 0;
  margin: 0;
}
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  transition: background-color .2s;

  &.contextmenu-active {
    background-color: #f5f5f5;
  }
}
</style>
