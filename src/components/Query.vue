<template>
  <div>
    <div>
      <van-field
        class="mt5"
        v-model="param.startDate"
        label="开始时间"
        placeholder="请输入开始时间"
        readonly
        @click="SetDate(0)"
      />
      <van-field
        class="mt5"
        v-model="param.endDate"
        label="结束时间"
        placeholder="请输入结束时间"
        readonly
        @click="SetDate(1)"
      />
      <van-field
        class="mt5"
        v-model="param.languageDesc"
        label="选择语种"
        placeholder="请选择语种"
        readonly
        @click="SetLangue"
      />
      <van-field
        class="mt5"
        v-model="param.query"
        label="用户/学校"
        placeholder="请输入用户/学校"
      />
      <van-button class="mt5" type="primary" @click="saveBus">搜索</van-button>
    </div>
    <van-popup v-model="dateObj.isShow" position="bottom">
      <van-datetime-picker
        v-model="dateObj.val"
        type="date"
        title="选择年月日"
        @confirm="SetDateDone"
        @cancel="dateObj.isShow = false"
      />
    </van-popup>

    <van-popup v-model="langObj.isShow" position="bottom">
      <van-picker
        title="选择语种"
        show-toolbar
        :columns="
          langs.map((item) => {
            return item.text;
          })
        "
        @confirm="pickerConfirm"
        @cancel="langObj.isShow = false"
      />
    </van-popup>
  </div>
</template>

<script>
import { DatetimePicker, Field, Popup, Picker, Button } from "vant";
import bus from "../bus";

export default {
  name: "Query",
  components: {
    [DatetimePicker.name]: DatetimePicker,
    [Field.name]: Field,
    [Popup.name]: Popup,
    [Picker.name]: Picker,
    [Button.name]: Button,
  },
  props: {
    navObj: {
      type: Object,
    },
  },
  data() {
    return {
      param: {
        startDate: "",
        endDate: "",
        language: "",
        languageDesc: "",
        query: "",
        type: 0,
      },
      langs: [
        { id: 0, text: "西班牙语" },
        { id: 1, text: "德语" },
        { id: 2, text: "法语" },
        { id: 3, text: "日语" },
      ],
      dateObj: {
        isShow: false,
        val: "",
        type: 0,
      },
      langObj: {
        isShow: false,
        val: "",
      },
    };
  },
  methods: {
    pickerConfirm(val, index) {
      this.langObj.val = index;
      this.langObj.isShow = false;
      this.param.languageDesc = val;
      this.param.language = index;
    },
    SetDateDone(value) {
      let dateObj = new Date(value);
      let dateVal =
        dateObj.getFullYear() +
        "/" +
        (dateObj.getMonth() + 1) +
        "/" +
        dateObj.getDate();
      if (this.dateObj.type === 0) {
        this.param.startDate = dateVal;
      }
      if (this.dateObj.type === 1) {
        this.param.endDate = dateVal;
      }
      this.dateObj.isShow = false;
    },
    //custom
    SetDate(type) {
      this.dateObj.type = type;
      this.dateObj.val =
        type === 0
          ? this.param.startDate === ""
            ? new Date()
            : new Date(this.startDate)
          : this.param.endDate === ""
          ? new Date()
          : new Date(this.param.endDate);
      this.dateObj.isShow = true;
    },
    SetLangue() {
      if (this.param.language != "") {
        this.langObj.val = this.param.language;
      }
      this.langObj.isShow = true;
    },
    saveBus() {
      let that = this;
      if (that.$props.navObj.type) {
        that.param.type = that.$props.navObj.type;
      }
      bus.$emit(that.$props.navObj.name + "Event", that.param);
    },
  },
  mounted() {
    this.saveBus();
  },
};
</script>

<style lang="scss" scoped>
.mt5 {
  margin-top: 0.5vh;
}
</style>