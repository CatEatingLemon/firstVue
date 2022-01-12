<template>
  <div>
    <van-nav-bar :title="title" @click-right="menuSwitch">
      <template #right>
        <van-icon name="add" size="18" />
      </template>
    </van-nav-bar>
    <van-popup
      v-model="menuOpen"
      position="right"
      :style="{ height: '100%', width: '70% ' }"
    >
      <van-tree-select
        :items="nav"
        :active-id="activeId"
        :main-active-index="activeIndex"
        :height="navHeight"
        @click-nav="changeNav"
        @click-item="changeItem"
        :max="1"
      >
      </van-tree-select>
    </van-popup>
  </div>
</template>

<script>
import { NavBar, Icon, Popup, TreeSelect } from "vant";
export default {
  name: "Header",
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Popup.name]: Popup,
    [TreeSelect.name]: TreeSelect,
  },
  props: {
    navObj: {
      type: Object,
    },
  },
  data() {
    return {
      activeId: '',
      activeIndex: 0,
      navHeight: "100%",
      menuOpen: false,
      title: "",
      nav: [],
    };
  },
  methods: {
    menuSwitch() {
      //控制导航栏显示
      this.menuOpen = !this.menuOpen;
    },
    changeNav(e) {
      this.activeIndex = e;
      this.$parent.$parent.activeIndex = e;
    },
    changeItem(e) {
      if (this.$router.history.current.name != e.fileName) {
        this.activeId=e.fileName;
        this.$parent.$parent.activeId=e.fileName;
        this.$router.push({
          name: e.fileName,
          query: { navName: e.fileName },
        });
      }
    },
  },
  created: function () {
    let that = this;
    that.nav = that.$parent.$parent.nav;
    console.log(that.$parent.$parent);
    this.activeId = that.$parent.$parent.activeId;
    this.activeIndex = that.$parent.$parent.activeIndex;
    if (that.$props.navObj.name === "index") {
      that.title = "首页";
      return false;
    }
    for (let item of that.nav) {
      let obj = item.children.find((_item) => {
        return _item.fileName == that.$props.navObj.name;
      });
      if (obj) {
        that.title = obj.text;
        break;
      }
    }
  },
};
</script>

<style lang="scss">
.van-nav-bar {
  background-color: initial;
}
.van-tree-select__item--active,.van-nav-bar .van-icon{
  color: #ff9a28;
}
</style>