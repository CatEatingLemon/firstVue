<template>
  <div>
    <van-popup
      v-model="showPop"
      position="right"
      :style="{ height: '100%', width: '50% ' }"
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
    <button @click="popNav">test</button>
  </div>
</template>

<script>
import { Popup, TreeSelect } from "vant";
// import { ref } from "vue";
// const activeId = ref(1);
// const activeIndex = ref(0);
export default {
  name: "Index",
  components: {
    [Popup.name]: Popup,
    [TreeSelect.name]: TreeSelect,
  },
  data() {
    return {
      showPop: false,
      nav: [
        {
          text: "数据信息",
          children: [
            { text: "登录统计", fileNmae: "LoginStatis" },
            { text: "朗读数据", fileName: "Read" },
            { text: "答卷信息", fileName: "Paper" },
            { text: "网课数据", fileName: "OnlineClass" },
            { text: "单词游戏", fileName: "WordGame" },
            { text: "考试词汇", fileName: "TestVocabulary" },
            { text: "小优词库", fileName: "Thesaurus" },
            { text: "智能翻译", fileName: "Translate" },
            { text: "趣味识图", fileName: "RecThePicture" },
            { text: "搜题记录", fileName: "QAHistroy" },
          ],
        },
        {
          text: "题库管理",
          children: [{ text: "题库纠错", fileName: "QAError" }],
        },
        {
          text: "综合管理",
          children: [
            { text: "老师管理", fileName: "Teacher" },
            { text: "学生管理", fileName: "Student" },
          ],
        },
        {
          text: "卷库管理",
          children: [
            { text: "老师布置", fileName: "Work" },
            { text: "卷库纠错", fileName: "PaperError" },
          ],
        },
        {
          text: "网校资源",
          children: [{ text: "在线答疑", fileName: "OnlineQA" }],
        },
        {
          text: "媒体辅助",
          children: [
            { text: "游戏反馈", fileName: "GameFeedback" },
            { text: "词库反馈", fileName: "VocaFeedback" },
          ],
        },
      ],
      activeId: 2,
      activeIndex: 0,
      navHeight: "100%",
    };
  },
  methods: {
    popNav() {
      this.showPop = !this.showPop;
    },
    changeNav(e) {
      this.activeIndex = e;
    },
    changeItem(e) {
      console.log(e);
    },
  },
};
</script>

<style>
</style>