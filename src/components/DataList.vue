<template>
  <div>
    <div class="data-list">
      <table>
        <tr>
          <th
            v-for="(item, index) in titles"
            :key="item.code"
            :class="index != titles.length - 1 ? 'van-hairline--right' : ''"
          >
            {{ item.title }}
          </th>
        </tr>
        <tr class="van-hairline--top" v-for="item in list" :key="item.id">
          <td
            v-for="(_item, _index) in titles"
            :key="_item.code"
            :class="_index != titles.length - 1 ? 'van-hairline--right' : ''"
          >
            {{ item[_item.code] }}
          </td>
        </tr>
      </table>
    </div>
    <van-pagination
      v-model="form.pageIndex"
      :total-items="totalItems"
      :items-per-page="form.pageSize"
      @change="PageChange"
    />
  </div>
</template>

<script>
import { Pagination, Toast } from "vant";
import bus from '../bus'
export default {
  name: "DataList",
  components: {
    [Pagination.name]: Pagination,
    [Toast.name]: Toast,
  },
  // props: {
  //   reqObj: {
  //     type: Object,
  //   },
  // },
  data() {
    return {
      form: {
        pageIndex: 1,
        pageSize: 10,
      },
      param: {},
      titles: [
        { title: "编号", code: "id" },
        { title: "名称", code: "name" },
      ],
      list: [
        { id: 1, name: "22" },
        { id: 2, name: "22" },
        { id: 3, name: "22" },
        { id: 4, name: "22" },
        { id: 5, name: "22" },
        { id: 6, name: "22" },
        { id: 7, name: "22" },
        { id: 8, name: "22" },
        { id: 9, name: "22" },
        { id: 10, name: "22" },
      ],
      totalItems: 11,
      url: " http://192.168.0.199:8009/Thirdparty",
      fullUrl: "",
    };
  },
  watch: {
    // reqObj: {
    //   handler(obj) {
    //     let that = this;
    //     this.fullUrl = this.url + obj.urlName;
    //     this.param = Object.assign(that.form, obj.param);
    //     that.query();
    //   },
    //   deep: true, //引用类型必须深度监听
    // },
  },
  methods: {
    query() {
      let that = this;
      this.$axios
        .post(that.fullUrl, that.$qs.stringify(that.param))
        .then((res) => {
          if (res.data.isSuccess) {
            that.titles = res.data.data.titles;
            that.list = res.data.data.list;
            that.totalItems = res.data.data.totalItems;
          } else {
            Toast(res.message);
          }
        })
        .catch(() => {
          Toast("连接失败");
        });
    },
    PageChange(e){
      this.pageIndex=e;
      this.query();
    }
  },
  mounted: function () {
    // let that = this;
    // console.log(that.$props);
    // this.fullUrl = this.url + this.$props.reqObj.urlName;
    // this.param = Object.assign(that.form, this.$props.reqObj.param);
    // this.query();
     bus.$on("queryObj",(data)=>{
      console.log(data);
    })
  },
  created:function(){
    // bus.$on("queryObj",function(data){
    //   console.log(data);
    // })
  },
  beforeDestroy:function(){
    bus.$off("queryObj")
  }
};
</script>

<style lang="scss">
.data-list {
  overflow-x: auto;
}
table {
  width: 100%;
  margin-top: 5vh;
  margin-bottom: 1vh;
  th,
  td {
    white-space: nowrap;
    padding: 2vw;
  }
}
</style>