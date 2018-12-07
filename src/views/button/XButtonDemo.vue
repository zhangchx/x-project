<template>
  <div style="padding: 10px 8%">
    <span>基本使用</span>
    <x-button text="登录"></x-button>
    <span>禁用</span>
    <x-button text="登录" :disabled="true"></x-button>
    <span>镂空</span>
    <x-button text="登录" type="simple"></x-button>
    <span>镂空禁用</span>
    <x-button text="登录" :disabled="true" type="simple"></x-button>
    <span>错误</span>
    <x-button text="登录" type="error"></x-button>
  </div>
</template>

<script>
import XButton from '@/components/x-button/XButton'
export default {
  name: 'button-demo',
  data () {
    return {
    }
  },
  methods: {},
  components: {XButton}
}
</script>

<style scoped>
span {
  font-size: 14px;
  color: rgba(0,0,0,0.60);
  margin: 10px 10%;
  display: block;
  user-select: none;
}
</style>
