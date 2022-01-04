<template>
  <div>
    <table>
      <tr>
        <th
          v-for="(item, index) in titles"
          :key="item.code"
          :class="index != titles.length - 1 ? 'van-hairline--right' : ''"
        >
          {{ item.name }}
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

    <van-pagination
      v-model="form.pageIndex"
      :total-items="totalItems"
      :items-per-page="form.pageSize"
    />
  </div>
</template>

<script>
import { Pagination } from "vant";
export default {
  name: "DataList",
  components: {
    [Pagination.name]: Pagination,
  },
  data() {
    return {
      form: {
        pageIndex: 1,
        pageSize: 10,
      },
      titles: [
        { name: "编号", code: "id" },
        { name: "名称", code: "name" },
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
    };
  },
};
</script>

<style lang="scss">
table {
  width: 100%;
  margin-top: 5vh;
  margin-bottom: 1vh;
}
</style>