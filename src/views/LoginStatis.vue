<template>
  <div>
    <Header :navObj="navObj" />
    <Query :navObj="navObj" />
    <DataList :navObj="navObj" />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import DataList from "../components/DataList.vue";
import Query from "../components/Query.vue";
export default {
  name: "LoginStatis",
  components: {
    [Header.name]: Header,
    [DataList.name]: DataList,
    [Query.name]: Query,
  },
  data() {
    return {
      navObj: {
        name: this.$route.query.navName,
        urlName: "GetLoginRec",
      }
    };
  },
};
</script>

<style>
</style>