<template>
  <div class="x-err" v-if="value" @click.stop="clickMask">
    <div class="x-err-box" @click.stop="$emit('input', true)">
      <div>{{title}}</div>
      <div>{{content}}</div>
      <div v-if="type !== 'nomal'">
        <span @click.stop="cancel"
              v-if="type==='confirm-cancel'">{{cancelBtnText}}</span>
        <span @click.stop="confirm"
          v-if="type==='confirm-cancel'||type==='confirm'">{{confirmBtnText}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'XErrorMsg',
  data () {
    return {
    }
  },
  methods: {
    clickMask () {
      if (this.hideOnClick) {
        this.$emit('input', false)
      }
    },
    confirm () {
      this.$emit('on-confirm')
    },
    cancel () {
      this.$emit('on-cancel')
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    hideOnClick: {
      type: Boolean,
      default: true
    },
    value: {
      type: Boolean,
      default: false
    },
    confirmBtnText: {
      type: String,
      default: '确定'
    },
    cancelBtnText: {
      type: String,
      default: '取消'
    },
    type: {
      type: String,
      default: 'nomal'
    }
  }
}
</script>

<style scoped>
  .x-err{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.6);
    top: 0;
    left: 0;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    -webkit-justify-content: center;
    align-items: center;
    -webkit-align-items: center;
  }
  .x-err-box {
    width: 76%;
    padding: 10px 10px 0;
    background-color: white;
    text-align: center;
    border-radius: 8px;
  }
  .x-err-box div:first-child{
    font-size: 16px;
    line-height: 24px;
    color: rgba(0,0,0,.85);
    padding: 6px;
  }
  .x-err-box div:nth-child(2){
    font-size: 14px;
    line-height: 22px;
    color: rgba(0,0,0,.65);
    margin-bottom: 16px;
  }
  .x-err-box div:nth-child(3){
    font-size: 14px;
    line-height: 22px;
    color: #40a9ff;
    margin-top: 14px;
    padding: 10px;
    border-top: 1px solid;
    letter-spacing: 2px;
    display: flex;
    display: -webkit-flex;
  }
  .x-err-box div:nth-child(3) span {
    display: block;
    flex: 1;
    -webkit-flex: 1;
  }
</style>
