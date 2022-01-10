<template>
  <div id="app">
    <!-- <login /> -->
    <router-view></router-view>
  </div>
</template>
<script>
// import Login from "./views/Login.vue";

export default {
  components: {
    // Login,
  },
  data() {
    return {
      nav: [
        {
          text: "数据信息",
          children: [
            {
              text: "登录统计",
              fileName: "LoginStatis",
              urlName: "GetLoginRec",
            },
            {
              text: "管理端登录统计",
              fileName: "LoginAdminStatis",
              urlName: "GetAdminLoginRec",
            },
            { text: "朗读数据", fileName: "Read", urlName: "GetReadList" },
            { text: "答卷信息", fileName: "Paper", urlName: "GetPageAnswer" },
            {
              text: "网课数据",
              fileName: "OnlineClass",
              urlName: "GetPageOnline",
            },
            { text: "单词游戏", fileName: "WordGame", urlName: "GetPageGame" },
            {
              text: "考试词汇",
              fileName: "TestVocabulary",
              urlName: "GetPageVocEx",
            },
            {
              text: "小优词库",
              fileName: "Thesaurus",
              urlName: "GetTHistroies",
            },
            { text: "智能翻译", fileName: "Translate", urlName: "GetPageAI" },
            {
              text: "趣味识图",
              fileName: "RecThePicture",
              urlName: "GetPageAI",
            },
            {
              text: "搜题记录",
              fileName: "QAHistroy",
              urlName: "GetPageQueryHistories",
            },
          ],
        },
        {
          text: "题库管理",
          children: [
            {
              text: "题库纠错",
              fileName: "QAError",
              urlName: "GetPageQuestionError",
            },
          ],
        },
        {
          text: "综合管理",
          children: [
            { text: "老师管理", fileName: "Teacher", urlName: "GetPageUser" },
            { text: "学生管理", fileName: "Student", urlName: "GetPageUser" },
          ],
        },
        {
          text: "卷库管理",
          children: [
            { text: "老师布置", fileName: "Work", urlName: "GetPagePaper" },
            {
              text: "卷库纠错",
              fileName: "PaperError",
              urlName: "GetPagePaperError",
            },
          ],
        },
        {
          text: "网校资源",
          children: [
            { text: "在线答疑", fileName: "OnlineQA", urlName: "GetPageDoubt" },
          ],
        },
        {
          text: "媒体辅助",
          children: [
            {
              text: "游戏反馈",
              fileName: "GameFeedback",
              urlName: "GetPageGMFeedback",
            },
            {
              text: "词库反馈",
              fileName: "VocaFeedback",
              urlName: "GetTHistroiesFeedback",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
