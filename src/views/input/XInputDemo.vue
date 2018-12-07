<template>
  <div style="padding: 10px 8%">
    <span>限制位数</span>
    <x-input
             label="验证码"
             placeholder="请输验证码"
             :max="6"
             v-model="phone">
    </x-input>
    <span>只读</span>
    <x-input
             label="姓名"
             placeholder="请输验证码"
             :readonly="true"
             :max="6"
             v-model="name">
    </x-input>
    <span>自定义标题宽度</span>
    <x-input
             label="所处区域编码"
             placeholder="请输验证码"
             :max="6"
             v-model="phone">
    </x-input>
    <x-input style="margin-top: 10px;"
             label="所处区域编码"
             placeholder="请输验证码"
             :max="6"
             labelWidth="50px"
             v-model="phone">
    </x-input>
    <span>自定义标题样式</span>
    <x-input
             placeholder="请输入手机号"
             v-model="phone">
      <div slot="label" style="-webkit-background-clip: text;color: transparent;background-image: linear-gradient(-225deg, #2CD8D5 0%, #C5C1FF 56%, #FFBAC3 100%);border-right: 1px solid rgba(0,0,0,.15);padding-right: 6px;">手机号</div>
    </x-input>
  </div>
</template>

<script>
import XInput from '@/components/x-input/XInput'
export default {
  name: 'input-demo',
  data () {
    return {
      phone: '',
      name: 'sonmy'
    }
  },
  methods: {},
  components: {XInput}
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
