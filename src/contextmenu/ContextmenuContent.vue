<template>
  <ul :class="['v-contextmenu-content', { 'dark': isDark }]">
    <template v-for="(menu, index) in menus">
      <li
        v-if="!menu.hide"
        class="v-contextmenu-item"
        :key="menu.text || index"
        @click.stop="clickMenuItem(menu)"
        :class="{'divider': menu.divider, 'disable': menu.disable}"
      >
        <div class="v-contextmenu-item-content" :class="{'has-sub-menu': menu.children}" v-if="!menu.divider">
          <span class="text">
            <span class="icon" v-if="menu.icon">
              <IconFont :type="menu.icon" />
            </span>
            <div v-else-if="menu.iconPlacehoder" class="icon-placehoder"></div>
            <span>{{menu.text}}</span>
          </span>
          <span class="sub-text" v-if="menu.subText && !menu.children">{{menu.subText}}</span>

          <v-contextmenu-content 
            class="sub-menu" 
            :style="{
              [subMenuPosition]: '112.5%',
            }"
            :menus="menu.children" 
            v-if="menu.children && menu.children.length"
            :clickMenuItem="clickMenuItem"
          />
        </div>
      </li>
    </template>
  </ul>
</template>

<script>
import IconFont from './IconFont'

export default {
  name: 'v-contextmenu-content',
  components: {
    IconFont,
  },
  props: {
    menus: {
      type: Array,
      required: true,
    },
    isDark: {
      type: Boolean,
      default: false,
    },
    subMenuPosition: {
      type: String,
      default: 'left',
    },
    clickMenuItem: {
      type: Function,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
$menuWidth: 160px;
$menuHeight: 32px;
$subMenuWidth: 120px;

.v-contextmenu-content {
  width: $menuWidth;
  padding: 5px 0;
  background-color: #fff;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  list-style: none;
  margin: 0;

  &.dark {
    background-color: #393939;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.25);

    .v-contextmenu-content {
      background-color: #393939;
      box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.25);
    }

    .v-contextmenu-item {
      color: #f1f1f1;
      background-color: #393939;

      &:hover:not(.disable) {
        background-color: #555;
      }

      &.divider {
        background-color: #999;
      }

      &.disable {
        color: #999;
      }
    }
  }
}
.v-contextmenu-item {
  padding: 0 20px;
  color: #666;
  font-size: 12px;
  transition: all 0.3s;
  white-space: nowrap;
  height: $menuHeight;
  line-height: $menuHeight;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;

  &:not(.disable):hover > .v-contextmenu-item-content > .sub-menu {
    display: block;
  }

  &:hover:not(.disable) {
    background-color: #f7f7f7;
  }

  &.divider {
    height: 1px;
    overflow: hidden;
    margin: 5px 15px;
    background-color: #e5e5e5;
    line-height: 0;
    padding: 0;
  }

  &.disable {
    color: #b1b1b1;
    cursor: no-drop;
  }
}
.v-contextmenu-item-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  &.has-sub-menu::before {
    content: '';
    display: inline-block;
    width: 0;
    height: 0;
    border-top: 4px solid transparent;
    border-left: 4px solid #676b6f;
    border-bottom: 4px solid transparent;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  .text {
    display: flex;
    align-items: center;
  }
  .icon {
    margin-right: 7px;
    display: flex;
    align-items: center;
  }
  .text span {
    vertical-align: middle;
  }
  .icon-placehoder {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-right: 7px;
  }
  .sub-text {
    opacity: 0.3;
  }
  .sub-menu {
    position: absolute;
    top: -5px;
    display: none;
    width: $subMenuWidth;
  }
}
</style>