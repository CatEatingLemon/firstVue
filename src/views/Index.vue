<template>
  <div>
    <van-popup
      v-model="showPop"
      position="right"
      :style="{ height: '100%', width: '50% ' }"
    >
      <van-list>
        <van-cell v-for="item in nav" :key="item.fileName" :title="item.name">
          <router-link :to="item.fileName">{{item.name}}</router-link>
        </van-cell>
      </van-list>
    </van-popup>
    <button @click="tess">test</button>
  </div>
</template>

<script>
import { Popup } from "vant";
import { List } from "vant";
export default {
  name: "Index",
  components: {
    [Popup.name]: Popup,
    [List.name]: List,
  },
  data() {
    return {
      showPop: false,
      nav: [
        {
          name: "数据信息",
          children: [
            { name: "登录统计", fileNmae: "LoginStatis" },
            { name: "朗读数据", fileName: "Read" },
            { name: "答卷信息", fileName: "Paper" },
            { name: "网课数据", fileName: "OnlineClass" },
            { name: "单词游戏", fileName: "WordGame" },
            { name: "考试词汇", fileName: "TestVocabulary" },
          ],
        },
        {
          name: "题库管理",
          children: [{ name: "题库纠错", fileName: "QAError" }],
        },
        {
          name: "综合管理",
          children: [
            { name: "老师管理", fileName: "Teacher" },
            { name: "学生管理", fileName: "Student" },
          ],
        },
        {
          name: "卷库管理",
          children: [
            { name: "老师布置", fileName: "Work" },
            { name: "卷库纠错", fileName: "PaperError" },
          ],
        },
        {
          name: "网校资源",
          children: [{ name: "在线答疑", fileName: "OnlineQA" }],
        },
        {
          name: "媒体辅助",
          children: [
            { name: "游戏反馈", fileName: "GameFeedback" },
            { name: "词库反馈", fileName: "VocaFeedback" },
          ],
        },
      ],
    };
  },
  methods: {
    tess() {
      this.showPop = true;
    },
  },
};
</script>

<style>
</style>