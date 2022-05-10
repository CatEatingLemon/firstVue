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
    <van-overlay :show="isLoading" @click="isLoading = false">
      <van-loading />
    </van-overlay>
  </div>
</template>

<script>
import { Pagination, Toast, Loading, Overlay } from "vant";
import bus from "../bus";
export default {
  name: "DataList",
  components: {
    [Pagination.name]: Pagination,
    [Toast.name]: Toast,
    [Loading.name]: Loading,
    [Overlay.name]: Overlay,
  },
  props: {
    navObj: {
      type: Object,
    },
  },
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
      totalItems: 1,
      url: "http://192.168.0.102:8009/Thirdparty",
      isLoading: false,
    };
  },
  methods: {
    query() {
      let that = this;
      this.isLoading=true;
      this.$axios
        .post(
          that.url + "/" + that.$props.navObj.urlName,
          that.$qs.stringify(that.param)
        )
        .then((res) => {
          this.isLoading=false;
          if (res.data.isSuccess) {
            that.titles = res.data.data.titles;
            that.list = res.data.data.list;
            that.totalItems = res.data.data.totalItems;
          } else {
            Toast(res.message);
          }
        })
        .catch(() => {
          this.isLoading=false;
          Toast("连接失败");
        });
    },
    PageChange(e) {
      this.pageIndex = e;
      this.query();
    },
  },
  created: function () {
    let that = this;
    bus.$on(that.$props.navObj.name + "Event", (data) => {
      if (data) {
        that.param = Object.assign(that.form, data);
        that.query();
      }
    });
  },
  beforeDestroy: function () {
    let that = this;
    bus.$off(that.$props.navObj.name + "Event");
  },
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
.van-overlay {
  .van-loading {
    top: 50vh;
  }
}
.van-pagination__item{
  color:#000;
}
.van-pagination__item--active{
  background-color:#fcab50;
  color: #fff;
}
</style>