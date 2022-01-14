<template>
  <div class="login-main">
    <img src="../assets/images/logo.png" alt="Logo" />
    <van-form @submit="onSubmit">
      <van-field
        class="van-hairline--bottom"
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        class="van-hairline--bottom"
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div class="btn-box">
        <van-button round block type="warning" native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { Button, Form, Field, Toast } from "vant";
export default {
  name: "Login",
  components: {
    [Button.name]: Button,
    [Form.name]: Form,
    [Field.name]: Field,
    [Toast.name]: Toast,
  },
  data() {
    return {
      username: "",
      password: "",
      localAccount: {
        account: "calvin.tian",
        password: "Qy@Calvin.Tian.888",
      },
    };
  },
  methods: {
    onSubmit() {
      let that = this;
      if (
        that.username === that.localAccount.account &&
        that.$md5(that.password) === that.$md5(that.localAccount.password)
      ) {
        that.$router.push({
          name: "Index",
          query: { navName: "LoginStatis" },
        });
      } else {
        Toast.fail("账号密码错误");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login-main {
  img {
    width: 40vw;
    padding-top: 15vh;
    margin-bottom: 5vh;
  }
}
.van-cell {
  background-color: initial;
  width: 80%;
  margin: 0 auto;
}
.btn-box {
  width: 80%;
  margin: 0 auto;
  margin-top: 5vh;
  .van-button--warning {
    background-color: #fcab50;
    border: 1px solid #fcab50;
  }
}
</style>