<template>
  <div style="height: 100vh;">
    <div style="margin-top: 6px">
      <div class="erth1">
        <div></div>
        <div></div>
      </div>
    </div>
    <div CLASS="title">X-PROJECT</div>
    <div class="x-grid">
      <div @click="go('x-button')">x-button</div>
      <div @click="go('x-input')">x-input</div>
      <div @click="go('x-select')">x-select</div>
      <div @click="go('x-address')">x-address</div>
      <div @click="go('x-error-msg')">x-error-msg</div>
    </div>
    <div class="bg">
      <div class="erth">
        <div></div>
        <div></div>
      </div>
    </div>
    <!--<x-button text="登录" style="margin: 10px 8%" :disabled="false" type="error" @click.native="ss"></x-button>-->
    <!--<x-error-msg title="非常抱歉"-->
                 <!--content="无法完成登录，建议重新点击登录"-->
                 <!--@on-confirm="checkOut"-->
                 <!--type="confirm-cancel"-->
                 <!--v-model="showError"></x-error-msg>-->
  </div>
</template>

<script>
import XAddress from '@/components/xaddress/XAddress.vue'
import XInput from '@/components/x-input/XInput.vue'
import XSelect from '@/components/x-select/XSelect.vue'
import XButton from '@/components/x-button/XButton.vue'
import XErrorMsg from '@/components/x-error-msg/XErrorMsg.vue'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      add: '',
      sex: '',
      showError: false,
      options: [{
        key: '1',
        value: '男'
      }, {
        key: '2',
        value: '女'
      }, {
        key: '3',
        value: '其他'
      }]
    }
  },
  methods: {
    checkOut () {
      this.showError = false
    },
    ss () {
      console.error(1)
      this.showError = true
    },
    onSelect () {},
    handleSelect (val) {
      console.error(val)
    },
    go (val) {
      this.$router.push({
        path: '/' + val
      })
    }
  },
  components: {
    XAddress,
    XInput,
    XSelect,
    XButton,
    XErrorMsg
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .x-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-top: 1px solid rgba(0,0,0,.15);
  }
  .x-grid div {
    text-align: center;
    line-height: 50px;
    border-bottom: 1px solid rgba(0,0,0,.15);
    border-right: 1px solid rgba(0,0,0,.15);
    user-select: none;
  }
  .x-grid div:active{
    background-color: rgba(0,0,0,.10);
  }
  .title {
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    margin: 10px;
    -webkit-background-clip: text;
    color: transparent;
    background-image: linear-gradient(-225deg, #2CD8D5 0%, #C5C1FF 56%, #FFBAC3 100%);
  }
  .bg {
    position: fixed;
    bottom: 0;
    padding: 10px 0;
    background-color: azure;
    height: 120px;
    width: 100%;
  }
  .erth1 {
    height: 80px;
    width: 80px;
    background-color: cornflowerblue;
    border-radius: 50%;
    margin: auto;
  }
  .erth1 div {
    height: 40px;
    width: 44px;
    border-radius: 50%;
    background-color: white;
  }
  .erth {
    height: 80px;
    width: 80px;
    background-color: cornflowerblue;
    border-radius: 50%;
    animation: run 10s infinite linear;
  }
  .erth div {
    height: 40px;
    width: 44px;
    border-radius: 50%;
    background-color: azure;
  }
  .erth div:last-child {
    /*margin-left: 50%;*/
  }
  @keyframes run {
    0%{
      margin-left: 0;
    }
    38%{
      margin-left: 100%;
      transform:rotate(0deg);
      margin-top: 0px;
    }
    43% {
      margin-top: 40px;
      margin-left: 100%;
      transform:rotate(180deg);
    }
    85% {
      margin-top: 40px;
      margin-left: -80px;
      transform:rotate(180deg);
    }
    90% {
      margin-top: 0px;
      margin-left: -80px;
      transform:rotate(360deg);
    }
    100%{
      margin-left: 0px;
      transform:rotate(360deg);
    }
  }
</style>
