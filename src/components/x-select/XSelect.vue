<template>
  <div>
    <div class="x-select">
      <slot name="label">
        <div :style="{width: labelWidth}" style="padding-right: 6px;margin-right:6px;border-right: 1px solid #ebedee;">{{label}}</div>
      </slot>
      <div @click.stop="!readonly? showOptions=true: ''"
           :style="{color: selected===''?'#bcbcbc ': ''}">
        {{selected===''? placeholder : selected}}
      </div>
    </div>
    <div class="popup-mask" v-show="showOptions" @click.stop="hideOnClick?showOptions=false:''">
      <div class="popup-window" @click.stop="showOptions=true">
        <slot name="option-title">
          <span>{{optionTitle}}</span>
        </slot>
        <div :key="index"
             :style="{color: value===item.key? '#1890FF' : ''}"
             v-for="(item, index) in options"
             @click.stop="select(item)">
          {{item.value}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'XSelect',
  mounted () {
    this.onOpened()
  },
  activated () {
    this.onOpened()
  },
  props: {
    label: {
      type: String
    },
    placeholder: {
      type: String
    },
    readonly: {
      type: Boolean,
      default: false
    },
    value: {
      default: ''
    },
    labelWidth: String,
    hideOnClick: {
      type: Boolean,
      default: true
    },
    optionTitle: {
      type: String,
      default: ''
    },
    options: {
      default: []
    }
  },
  methods: {
    onOpened () {
      if (this.value !== '') {
        for (let i in this.options) {
          if (this.value === this.options[i].key) {
            this.selected = this.options[i].value
          }
        }
      }
    },
    select (item) {
      this.selected = item.value
      this.$emit('input', item.key)
      this.$emit('on-select', item)
      setTimeout(() => {
        this.showOptions = false
      }, 100)
    }
  },
  data () {
    return {
      showOptions: false,
      selected: ''
    }
  },
  watch: {
    value (val) {
      this.onOpened()
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
  .x-select {
    padding: 12px;
    border: 1px solid #ebedee;
    border-radius: 6px;
    color: #243949;
    display: flex;
    display: -webkit-flex;
    user-select: none;
  }
  .x-select div:last-child{
    flex: 1;
    -webkit-box-flex: 1;
  }

  .popup-mask {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.6);
    height: 100vh;
    width: 100vw;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
    -webkit-align-items: center;
    -webkit-justify-content: center;
  }
  .popup-window {
    width: 80vw;
    background-color: white;
    border-radius: 2px;
    font-size: 18px;
    max-height: 80vh;
    overflow: auto;
    /*color: #52697f;*/
  }
  .popup-window span {
    display: block;
    text-align: center;
    padding: 8px;
  }
  .popup-window div {
    padding: 8px 20px;
    border-top: 1px solid #ebedee;
  }
  .popup-window div:active{
    background-color: #EEEEEF;
  }
</style>
