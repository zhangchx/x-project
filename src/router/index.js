import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import XInput from '@/views/input/XInputDemo'
import XButton from '@/views/button/XButtonDemo'
import XSelect from '@/views/select/XSelectDemo'
import XAddress from '@/views/address/XAddressDemo.vue'
import XErrorMsg from '@/views/error-msg/XErrorMsgDemo.vue'
import XList from '@/views/list/XIistDemo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/x-input',
      name: 'X-Input',
      component: XInput
    },
    {
      path: '/x-button',
      name: 'X-Button',
      component: XButton
    },
    {
      path: '/x-address',
      name: 'X-Address',
      component: XAddress
    },
    {
      path: '/x-select',
      name: 'X-Select',
      component: XSelect
    },
    {
      path: '/x-error-msg',
      name: 'X-Error-Msg',
      component: XErrorMsg
    },
    {
      path: '/x-list',
      name: 'X-List',
      component: XList
    }
  ]
})
