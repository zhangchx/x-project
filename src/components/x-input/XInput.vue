<template>
  <div>
    <div class="x-input">
      <slot name="label">
        <div :style="{width: labelWidth}" style="user-select: none;padding-right: 6px;margin-right:6px;border-right: 1px solid #ebedee;">{{label}}</div>
      </slot>
      <input class="x-input-box"
             ref="input"
             :type="type"
             @blur="blur"
             @focus="focus"
             :maxlength="max"
             :readonly="readonly"
             :placeholder="placeholder"
             :value="value"
             @input="$emit('input', $event.target.value)"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'XInput',
  mounted () {
  },
  props: {
    label: {
      type: String
    },
    placeholder: {
      type: String
    },
    value: {},
    type: {
      type: String,
      default: 'text'
    },
    max: Number,
    readonly: {
      type: Boolean,
      default: false
    },
    labelWidth: String
  },
  methods: {
    blur ($event) {
      this.$emit('on-blur', $event)
    },
    focus ($event) {
      this.$emit('on-focus', $event)
    }
  },
  data () {
    return {
    }
  },
  filters: {
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
  .x-input {
    padding: 12px;
    border: 1px solid #ebedee;
    border-radius: 6px;
    color: #243949;
    display: flex;
    display: -webkit-flex;
  }
  .x-input-box {
    flex: 1;
    border: none;
    width: 100px;
  }
  .x-input-box::-webkit-input-placeholder{
    color: #bcbcbc;
  }
  .x-input-box::-moz-placeholder{
  color: #bcbcbc;
  }
  .x-input-box:-ms-input-placeholder{
  color: #bcbcbc;
  }
</style>
