<template>
  <div>
    <Header :navObj="navObj" />
    <DataList />
  </div>
</template>

<script>
import Header from "../components/Header";
import DataList from "../components/DataList";
export default {
  name: "LoginStatis",
  components: {
    [Header.name]: Header,
    [DataList.name]: DataList,
  },
  data() {
    return {
      navObj: {
        name: this.$route.query.navName,
      },
    };
  },
};
</script>

<style>
</style>