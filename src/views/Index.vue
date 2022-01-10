<template>
  <div>
    <Header :navObj="navObj" />
  </div>
</template>

<script>
import Header from "../components/Header";

export default {
  name: "Index",
  components: {
    [Header.name]: Header,
  },
  data() {
    return {
      navObj: {
        name: "index",
      },
    };
  },
  methods: {},
  created: function () {
    //默认显示第一个路由
    // let navName = this.$route.query.navName;
    // this.navObj.name = navName;
  },
};
</script>

<style>
</style>