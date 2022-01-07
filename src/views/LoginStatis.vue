<template>
  <div>
    <Header :navObj="navObj" />
    <div>
      <van-field
        v-model="reqObj.ui.param.startDate"
        label="开始时间"
        placeholder="请输入开始时间"
        readonly
        @click="SetDate(0)"
      />
      <van-field
        v-model="reqObj.ui.param.endDate"
        label="结束时间"
        placeholder="请输入结束时间"
        readonly
        @click="SetDate(1)"
      />
    </div>
    <van-divider>前台登录信息</van-divider>
    <DataList :reqObj="reqObj.ui" />
    <van-divider>管理端登录信息</van-divider>
    <DataList :reqObj="reqObj.admin" />
    <van-popup v-model="dateObj.isShow" position="bottom">
      <van-datetime-picker
        v-model="dateObj.val"
        type="date"
        title="选择年月日"
        @confirm="SetDateDone"
        @cancel="dateObj.isShow = false"
      />
    </van-popup>
  </div>
</template>

<script>
import Header from "../components/Header";
import DataList from "../components/DataList";
import { DatetimePicker, Field, Popup, Divider } from "vant";
export default {
  name: "LoginStatis",
  components: {
    [Header.name]: Header,
    [DataList.name]: DataList,
    [DatetimePicker.name]: DatetimePicker,
    [Field.name]: Field,
    [Popup.name]: Popup,
    [Divider.name]: Divider,
  },
  data() {
    return {
      navObj: {
        name: this.$route.query.navName,
      },
      reqObj: {
        ui: {
          urlName: "/GetLoginRec",
          param: {
            startDate: "",
            endDate: "",
          },
        },
        admin: {
          urlName: "/GetAdminLoginRec",
          param: {
            startDate: "",
            endDate: "",
          },
        },
      },

      dateObj: {
        isShow: false,
        val: "",
        type: 0,
      },
    };
  },
  methods: {
    SetDate(type) {
      this.dateObj.type = type;
      this.dateObj.val =
        type === 0
          ? this.reqObj.ui.param.startDate === ""
            ? new Date()
            : new Date(this.reqObj.ui.param.startDate)
          : this.reqObj.ui.param.endDate === ""
          ? new Date()
          : new Date(this.reqObj.ui.param.endDate);
      this.dateObj.isShow = true;
    },
    SetDateDone(value) {
      // value === datetime
      let dateObj = new Date(value);
      let dateVal =
        dateObj.getFullYear() +
        "/" +
        (dateObj.getMonth() + 1) +
        "/" +
        dateObj.getDate();
      if (this.dateObj.type === 0) {
        this.reqObj.ui.param.startDate = dateVal;
        this.reqObj.admin.param.startDate = dateVal;
      }
      if (this.dateObj.type === 1) {
        this.reqObj.ui.param.endDate = dateVal;
        this.reqObj.admin.param.endDate = dateVal;
      }
      this.dateObj.isShow = false;
    },
  },
};
</script>

<style>
</style>