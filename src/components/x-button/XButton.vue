<template>
  <div class="x-btn"
       :class="[disabled? (type=='simple'? 'x-btn-simple-disable':'x-btn-disable '): '', type]">
    <div class="x-btn-active" :style="{color: disabled?'rgba(0,0,0,40%)': '' }">{{text}}</div>
  </div>
</template>

<script>
export default {
  name: 'XButton',
  props: {
    text: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'nomal'
    },
    lodding: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
  .x-btn{
    text-align: center;
    border-radius: 8px;
    user-select: none;
    height: 40px;
    overflow: hidden;
  }
  .nomal {
    background-color: #1890ff;
    color: white;
  }
  .simple {
    border: 1px solid #1890ff;
    color: #1890ff;
  }
  .error {
    border: 1px solid #f5222d;
    color: #f5222d;
  }
  .x-btn-disable {
    background-color: #ebedee;
  }
  .x-btn-simple-disable {
    border: 1px solid rgba(0,0,0,.15);
  }
  .x-btn-active {
    font-size: 16px;
    line-height: 24px;
    padding: 8px;
    overflow: hidden;
  }
  .x-btn-active:active {
    animation: ripples .6s linear;
  }
  @keyframes ripples {
    0% {
      box-shadow:0px 0px 0px #fff inset;
    }
    100% {
      box-shadow:0px 0px 50px #fff inset;
    }
  }
</style>
