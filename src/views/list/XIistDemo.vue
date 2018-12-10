<template>
  <div>
    <x-list :list="list"></x-list>
  </div>
</template>

<script>
import XList from '@/components/x-list/XList.vue'
export default {
  name: 'list-demo',
  data () {
    return {
      list: [
        {
          name: 'Oct',
          detail: [
            {
              name: 'BF',
              cost: '$10'
            },
            {
              name: 'MC',
              cost: '$12'
            },
            {
              name: 'MC',
              cost: '$12'
            },
            {
              name: 'MC',
              cost: '$12'
            },
            {
              name: 'MC',
              cost: '$12'
            },
            {
              name: 'MC',
              cost: '$12'
            },
            {
              name: 'MC',
              cost: '$12'
            },
            {
              name: 'MC',
              cost: '$12'
            },
            {
              name: 'MC',
              cost: '$12'
            },
            {
              name: 'MC',
              cost: '$12'
            },
            {
              name: 'AC',
              cost: '$12'
            }
          ]
        },
        {
          name: 'Nov',
          detail: [
            {
              name: 'HM',
              cost: '$10'
            },
            {
              name: 'GG',
              cost: '$122'
            },
            {
              name: 'HM',
              cost: '$10'
            },
            {
              name: 'GG',
              cost: '$122'
            }
          ]
        },
        {
          name: 'Dec',
          detail: [
            {
              name: 'LS',
              cost: '$1000'
            },
            {
              name: 'GTA',
              cost: '$50'
            },
            {
              name: 'LS',
              cost: '$1000'
            },
            {
              name: 'GTA',
              cost: '$50'
            },
            {
              name: 'GG',
              cost: '$122'
            },
            {
              name: 'HM',
              cost: '$10'
            },
            {
              name: 'GG',
              cost: '$122'
            },
            {
              name: 'HM',
              cost: '$10'
            },
            {
              name: 'GG',
              cost: '$122'
            },
            {
              name: 'HM',
              cost: '$10'
            },
            {
              name: 'GG',
              cost: '$122'
            },
            {
              name: 'HM',
              cost: '$10'
            },
            {
              name: 'GG',
              cost: '$122'
            },
            {
              name: 'LYS',
              cost: '$102'
            }
          ]
        }
      ]
    }
  },
  methods: {},
  components: {XList}
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
