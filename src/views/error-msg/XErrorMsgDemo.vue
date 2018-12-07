<template>
  <div style="padding: 10px 8%">
    <span>基本使用</span>
    <x-button text="提交" @click.native="showMsg=true"></x-button>
    <XErrorMsg v-model="showMsg"
               title="非常抱歉"
               content="已无名额可供申请，请明日再来"></XErrorMsg>
    <span>type=confirm</span>
    <x-button text="提交" @click.native="showMsg1=true"></x-button>
    <XErrorMsg v-model="showMsg1"
               title="非常抱歉"
               type="confirm"
               @on-confirm="onConfirm"
               content="已无名额可供申请，请明日再来"></XErrorMsg>
    <span>type=confirm-cancel</span>
    <x-button text="提交" @click.native="showMsg2=true"></x-button>
    <XErrorMsg v-model="showMsg2"
               title="非常抱歉"
               type="confirm-cancel"
               @on-confirm="onConfirm2"
               @on-cancel="onCancel2"
               content="已无名额可供申请，请明日再来"></XErrorMsg>
    <span>点击蒙版不关闭</span>
    <x-button text="提交" @click.native="showMsg3=true"></x-button>
    <XErrorMsg v-model="showMsg3"
               title="非常抱歉"
               type="confirm"
               :hideOnClick="false"
               @on-confirm="onConfirm3"
               content="已无名额可供申请，请明日再来"></XErrorMsg>
  </div>
</template>

<script>
import XErrorMsg from '@/components/x-error-msg/XErrorMsg.vue'
import XButton from '@/components/x-button/XButton'
export default {
  name: 'error-msg-demo',
  data () {
    return {
      showMsg: false,
      showMsg1: false,
      showMsg2: false,
      showMsg3: false
    }
  },
  methods: {
    onConfirm () {
      this.showMsg1 = false
    },
    onConfirm2 () {
      this.showMsg2 = false
    },
    onCancel2 () {
      this.showMsg2 = false
    },
    onConfirm3 () {
      this.showMsg3 = false
    }
  },
  components: {XErrorMsg, XButton}
}
</script>

<style scoped>
span {
  font-size: 14px;
  color: rgba(0,0,0,0.60);
  margin: 10px 10%;
  display: block;
}
</style>
