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
              text: "用户登录",
              fileName: "LoginStatis",
              urlName: "GetLoginRec",
              id: "LoginStatis",
            },
            {
              text: "管理登录",
              fileName: "LoginAdminStatis",
              urlName: "GetAdminLoginRec",
              id: "LoginAdminStatis",
            },
            {
              text: "朗读数据",
              fileName: "Read",
              urlName: "GetReadList",
              id: "Read",
            },
            {
              text: "答卷信息",
              fileName: "Paper",
              urlName: "GetPageAnswer",
              id: "Paper",
            },
            {
              text: "网课数据",
              fileName: "OnlineClass",
              urlName: "GetPageOnline",
              id: "OnlineClass",
            },
            {
              text: "单词游戏",
              fileName: "WordGame",
              urlName: "GetPageGame",
              id: "WordGame",
            },
            {
              text: "考试词汇",
              fileName: "TestVocabulary",
              urlName: "GetPageVocEx",
              id: "TestVocabulary",
            },
            {
              text: "小优词库",
              fileName: "Thesaurus",
              urlName: "GetTHistroies",
              id: "Thesaurus",
            },
            {
              text: "智能翻译",
              fileName: "Translate",
              urlName: "GetPageAI",
              id: "Translate",
            },
            {
              text: "趣味识图",
              fileName: "RecThePicture",
              urlName: "GetPageAI",
              id: "RecThePicture",
            },
            {
              text: "搜题记录",
              fileName: "QAHistroy",
              urlName: "GetPageQueryHistories",
              id: "QAHistroy",
            },
          ],
        },
        {
          text: "综合管理",
          children: [
            {
              text: "老师管理",
              fileName: "Teacher",
              urlName: "GetPageUser",
              id: "Teacher",
            },
            {
              text: "学生管理",
              fileName: "Student",
              urlName: "GetPageUser",
              id: "Student",
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
              id: "QAError",
            },
          ],
        },
        {
          text: "卷库管理",
          children: [
            {
              text: "老师布置",
              fileName: "Work",
              urlName: "GetPagePaper",
              id: "Work",
            },
            {
              text: "卷库纠错",
              fileName: "PaperError",
              urlName: "GetPagePaperError",
              id: "PaperError",
            },
          ],
        },
        {
          text: "网校资源",
          children: [
            {
              text: "在线答疑",
              fileName: "OnlineQA",
              urlName: "GetPageDoubt",
              id: "OnlineQA",
            },
          ],
        },
        {
          text: "媒体辅助",
          children: [
            {
              text: "游戏反馈",
              fileName: "GameFeedback",
              urlName: "GetPageGMFeedback",
              id: "GameFeedback",
            },
            {
              text: "词库反馈",
              fileName: "VocaFeedback",
              urlName: "GetTHistroiesFeedback",
              id: "VocaFeedback",
            },
          ],
        },
        {
          text: "资料管理",
          children: [
            {
              text: "广播纠错",
              fileName: "FMError",
              urlName: "GetPageFMError",
              id: "FMError",
            },
          ],
        },
        {
          text: "主题闯关",
          children: [
            {
              text: "闯关记录",
              fileName: "ThemeRec",
              urlName: "GetPageThemeRec",
              id: "ThemeRec",
            },
            {
              text: "习题反馈",
              fileName: "ThemeError",
              urlName: "GetPageThemeError",
              id: "ThemeError",
            }
          ],
        }
      ],
      activeId: "",
      activeIndex: 0,
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
  background: url("./assets/images/bg.jpg") no-repeat center center;
  background-size: cover;
  width: 100vw;
  height: 100vh;
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
