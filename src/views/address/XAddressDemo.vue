<template>
  <div style="padding: 10px 8%">
    <span>基本使用</span>
    <x-address></x-address>
  </div>
</template>

<script>
import XAddress from '@/components/xaddress/XAddress.vue'
export default {
  name: 'Address-demo',
  data () {
    return {
      type: '',
      options: [{
        key: '1',
        value: '拉布拉多'
      }, {
        key: '2',
        value: '秋田'
      }]
    }
  },
  methods: {},
  components: {XAddress}
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
