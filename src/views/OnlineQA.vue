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
        urlName: "",
      },
    }
  },
  created() {
    let nav = this.$parent.nav;
    let url = "";
    for (let item of nav) {
      let temp = item.children.find((_item) => {
        return _item.fileName === this.navObj.name;
      });
      if (temp) {
        url = temp.urlName;
      }
    }
    this.navObj.urlName = url;
  },
};
</script>

<style>

</style>