<template>
  <div ref="listbody" class="x-list" @scroll="gundong">
    <div class="title flot">{{topTitle}}</div>
    <div :id="'title'+index" class="x-list-box" :key="index" v-for="(item, index) in list">
      <div class="title">{{item.name}}</div>
      <div class="cell" :key="index2" v-for="(child, index2) in item.detail">
        {{child.name}}： {{child.cost}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'XList',
  mounted () {
    this.topTitle = this.list[0].name
  },
  props: {
    list: {
      default: []
    }
  },
  methods: {
    gundong () {
      let total = 0
      for (let i in this.list) {
        total += document.getElementById('title' + i).clientHeight
        if (total < this.$refs.listbody.scrollTop) {
          let j = Number(i) + 1
          this.topTitle = this.list[j].name
        } else {
          this.topTitle = this.list[i].name
          return
        }
      }
    }
  },
  data () {
    return {
      topTitle: ''
    }
  },
  filters: {
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
  .x-list {
    width: 100vw;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    /*background-color: #e6f7ff;*/
  }
  .x-list-box {
    width: 100%;
  }
  .flot {
    position: fixed;
  }
  .title {
    background-color: #f5f5f5;
    box-shadow: 0 0 10px #f5f5f5;
    width: 100%;
    text-align: center;
    padding: 10px;
  }
  .cell {
    padding: 10px;
    margin: 5% 10px;
    background-color: white;
    border-radius: 6px;
    border: 1px solid #ebedee;
  }
</style>
