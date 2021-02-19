<template>
  <div id="app" v-contextmenu.dark="contextmenus">
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
          text: '删除',
          subText: 'BACKSPACE',
          action: e => {
            this.msg = '你点击了删除'
            console.log(e)
          }
        },
        {
          text: '禁用菜单项',
          disable: true,
        },
        { divider: true },
        {
          text: '多级菜单',
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
        { divider: true },
        {
          text: '剪切',
          subText: 'CTRL + X',
          action: () => this.msg = '你点击了剪切'
        },
        {
          text: '复制',
          subText: 'CTRL + C',
          action: () => this.msg = '你点击了复制'
        },
        {
          text: '粘贴',
          subText: 'CTRL + V',
          action: () => this.msg = '你点击了粘贴'
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
  display: flex;
  justify-content: center;
  align-items: center;

  &.contextmenu-active {
    background-color: #f5f5f5;
  }
}
</style>
