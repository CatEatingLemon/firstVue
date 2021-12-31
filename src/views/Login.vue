<template>
  <div class="login-main">
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { Button } from "vant";
import { Form } from "vant";
import { Field } from "vant";
import { Toast } from "vant";
export default {
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
        account: "Qy@calvin888",
        password: "calvin",
      },
    };
  },
  methods: {
    onSubmit() {
      let that = this;
      if (
        that.username == that.localAccount.account &&
        that.password == that.localAccount.password
      ) {
        that.$router.push({ name: "Index" });
      } else {
        Toast.fail("账号密码错误");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.login-main {
  margin-top: 30vh;
}
</style>