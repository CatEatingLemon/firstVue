<template>
  <div>
    <Header :navObj="navObj" />
    <Query />
    <DataList />
  </div>
</template>

<script>
// import bus from "../bus";
import Header from "../components/Header.vue";
import DataList from "../components/DataList.vue";
import Query from "../components/Query.vue";
export default {
  name: "Read",
  components: {
    [Header.name]: Header,
    [DataList.name]: DataList,
    [Query.name]: Query,
  },
  data() {
    return {
      navObj: {
        name: this.$route.query.navName,
      },
    };
  },
  // created: function () {
  //   bus.$on("queryObj", (data) => {
  //     console.log(data, "上车成功");
  //   });
  // },
  // beforeDestroy() {
  //   bus.$off("queryObj");
  // },
};
</script>

<style>
</style>