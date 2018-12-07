<template>
  <div>
    <div class="address-input">
      <slot name="label">
        <div :style="{width: labelWidth}" style="padding-right: 6px;margin-right:6px;border-right: 1px solid #ebedee;">{{label}}</div>
      </slot>
      <div @click.stop="!readonly? showSelector=true: ''" :style="{color: address===''?'#bcbcbc ': ''}">
          {{address | fmtAddress}}
      </div>
    </div>
    <div class="address-selector" v-show="showSelector" @click.stop="mask">
      <div class="address-selector-box" @click.stop="showSelector=true">
      <div class="address-head">
        <div @click.stop="clickTop('p')" :class="focus==='1'? 'under_border': ''">
          <span>{{p.name}}</span>
        </div>
        <div @click.stop="clickTop('c')" v-if="focus==='2' || focus==='3'" :class="focus==='2'? 'under_border': ''">
          <span>{{c.name}}</span>
        </div>
        <div @click.stop="clickTop('a')" v-if="focus==='3'" :class="focus==='3'? 'under_border': ''">
          <span>{{a.name}}</span>
        </div>
      </div>
      <div class="address-body" ref="addresslist">
        <div :key="index" v-for="(item, index) in items" @click.stop="select(item)">
          <span :class="(p.id===item.id || c.id===item.id || a.id===item.id)? 'selet_color': ''">{{item.name}}</span>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import address from './address.js'
export default {
  name: 'XAddress',
  mounted () {
    this.items = address.address
    this.plist = address.address
    this.getAdd()
  },
  props: {
    location: {
      province: '',
      city: '',
      area: ''
    },
    label: {
      type: String,
      default: '所在区域'
    },
    readonly: {
      type: Boolean,
      default: false
    },
    hideOnClick: {
      type: Boolean,
      default: true
    },
    labelWidth: String
  },
  methods: {
    // 数据初始化
    getAdd () {
      if (!this.location || this.location.province === '') {
        return
      }
      this.focus = '1'
      for (let item of this.items) {
        if (this.location.province === this.items[item].name) {
          this.p.id = this.items[item].id
          this.p.name = this.items[item].name
          this.clist = this.items[item].child
        }
      }
      if (this.location.city === '') {
        return
      }
      this.items = this.clist
      this.focus = '2'
      for (let item of this.items) {
        if (this.location.city === this.items[item].name) {
          this.c.id = this.items[item].id
          this.c.name = this.items[item].name
          this.alist = this.items[item].child
        }
      }
      if (this.location.area === '') {
        return
      }
      this.items = this.alist
      this.focus = '3'
      for (let item in this.items) {
        if (this.location.area === this.items[item].name) {
          this.a.id = this.items[item].id
          this.a.name = this.items[item].name
        }
      }
    },
    clickTop (val) {
      if (val === 'p') {
        if (this.focus === '1') {
          return
        }
        this.items = this.plist
        this.c.id = ''
        this.c.name = '市'
        this.a.id = ''
        this.a.name = '区'
        this.focus = '1'
      } else if (val === 'c') {
        if (this.focus === '2') {
          return
        }
        this.a.name = '区'
        this.focus = '1'
        this.items = this.clist
        this.focus = '2'
      } else if (val === 'a') {
      }
    },
    select (item) {
      if (this.focus === '1') {
        this.$refs.addresslist.scrollTop = 0
        this.p.id = item.id
        this.p.name = item.name
        this.clist = item.child
        this.items = this.clist
        this.focus = '2'
      } else if (this.focus === '2') {
        this.$refs.addresslist.scrollTop = 0
        this.c.id = item.id
        this.c.name = item.name
        this.alist = item.child
        this.items = this.alist
        this.focus = '3'
      } else if (this.focus === '3') {
        this.a.id = item.id
        this.a.name = item.name
        let data = {
          province: this.p,
          city: this.c,
          area: this.a
        }
        this.address = data.province.name + data.city.name + data.area.name
        this.showSelector = false
        this.$emit('on-select', data)
      }
    },
    selectP () {
      this.items = address.address
      this.plist = address.address
      this.showSelector = true
    },
    mask () {
      if (this.hideOnClick) {
        this.showSelector = false
      }
    }
  },
  data () {
    return {
      showSelector: false,
      focus: '1',
      items: [],
      plist: [],
      clist: [],
      alist: [],
      p: {
        id: '',
        name: '省'
      },
      c: {
        id: '',
        name: '市'
      },
      a: {
        id: '',
        name: '区'
      },

      address: ''
    }
  },
  filters: {
    fmtAddress (val) {
      if (val === '') {
        return '请选择地址'
      }
      return val
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
  .address-head {
    top: 0px;
    width: 100%;
    background-color: #ebedee;
    display: flex;
    text-align: center;
    color: #52697f;
    justify-content: space-around;
    align-items: stretch;
  }
  .address-head:after {
    content: "";
    clear: both;
    display: block;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }
  .address-head div {
    display: inline-block;
    padding: 10px 10px 7px;
  }
  .under_border {
    border-bottom: #52697f solid 3px;
    color: #52697f;
  }
  .address-body {
    width: 100%;
    height: 60vh;
    overflow: auto;
    color: #909399;
    background: #ffffff;
    text-align: center;
  }
  .selet_color {
    color: #1890FF;
  }
  .address-body div {
    width: 100%;
    color: #52697f;
  }
  .address-body div span {
    display: block;
    padding: 10px 0px;
    width: 80%;
    margin: auto;
    border-bottom: 1px solid #f6f6f6;
  }
  .address-selector {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.6);
    height: 100vh;
    width: 100vw;
  }
  .address-selector-box {
    position: absolute;
    bottom: 0;
    width: 100%;
    animation: turn_up .2s;
  }

  @keyframes turn_up {
    0% {
      opacity: 0;
      bottom: -60vh
    }
    100% {
      opacity: 1;
      bottom: 0;
    }
  }
  .address-input {
    padding: 12px;
    border: 1px solid #ebedee;
    border-radius: 6px;
    color: #243949;
    display: flex;
    display: -webkit-flex;
    user-select: none;
  }
  .address-input div:last-child{
    flex: 1;
    -webkit-box-flex: 1;
  }
</style>
