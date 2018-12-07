<template>
  <div style="padding: 10px 8%">
    <span>基本使用</span>
    <x-select v-model="type"
              :options="options"
              label="品种"
              placeholder="请选择"
              optionTitle="选择品种">
    </x-select>
    <span>只读</span>
    <x-select v-model="type"
              :options="options"
              label="品种"
              :readonly="true"
              placeholder="请选择"
              optionTitle="选择品种">
    </x-select>
    <span>点击蒙版不关闭</span>
    <x-select v-model="type"
              :options="options"
              label="品种"
              :hideOnClick="false"
              placeholder="请选择"
              optionTitle="选择品种">
    </x-select>
    <span>自定义标题</span>
    <x-select v-model="type"
              :options="options"
              label="品种"
              placeholder="请选择"
              optionTitle="选择品种">
      <div slot="label" style="width: 14px;height: 14px;border: 4px solid slateblue;border-radius: 0 50% 50% 0/ 50%;margin-right: 10px;"></div>
    </x-select>
  </div>
</template>

<script>
import XSelect from '@/components/x-select/XSelect'
export default {
  name: 'select-demo',
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
  components: {XSelect}
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
