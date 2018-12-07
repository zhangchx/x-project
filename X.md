## XInput 输入框

### 使用：

```
<x-input label="电话号码"
         placeholder="请输入电话号码"
         max="11"
         v-model="phone">
</x-input>
```

### 属性：

| 名字        | 类型    | 默认值 | 说明                                       |
| ----------- | ------- | ------ | ------------------------------------------ |
| value       | string  |        | 输入框值，用v-model绑定                    |
| type        | string  | text   | input框类型                                |
| max         | number  |        | 输入最大值                                 |
| label       | string  |        | 输入框标题                                 |
| placeholder | string  |        | 输入框提示                                 |
| readonly    | boolean | false  | 是否只读                                   |
| labelWidth  | string  |        | 标题宽度，需带单位；例：labelWidth=“120px” |

### 事件：

| 名字      | 参数   | 说明               |
| --------- | ------ | ------------------ |
| @on-focus | $event | 输入框获取焦点事件 |
| @on-blur  | $event | 输入框失去焦点事件 |

### 插槽：

| 名字  | 说明             |
| ----- | ---------------- |
| label | 用于自定义标题栏 |



## XAddress 地址选择器

### 使用：

```
<x-address @on-select="onSelect"></x-address>
```

### 属性：

| 名字        | 类型    | 默认值 | 说明                                       |
| ----------- | ------- | ------ | ------------------------------------------ |
| location    | obj     |        | 初始地址{province: '',city: '',area: ''}   |
| label       | string  |        | 输入框标题                                 |
| labelWidth  | string  |        | 标题宽度，需带单位；例：labelWidth=“120px” |
| hideOnClick | boolean | true   | 点击蒙版关闭选项栏                         |
| readonly    | boolean | false  | 是否只读                                   |

### 事件：

| 名字       | 参数 | 说明                            |
| ---------- | ---- | ------------------------------- |
| @on-select | data | 选择地址后触发事件,返回地址信息 |

### 插槽：

| 名字  | 说明             |
| ----- | ---------------- |
| label | 用于自定义标题栏 |

## XSelect 选择器

### 使用：

```
<x-select label="性别"
              v-model="sex"
              :options="[{key:'1',value:'男'}，{key: '2',value: '女'}]"
              optionTitle="选择性别"
              @on-select="handleSelect"
              placeholder="选择性别">
</x-select>
```

### 属性：

| 名字        | 类型    | 默认值 | 说明                                                         |
| ----------- | ------- | ------ | ------------------------------------------------------------ |
| value       | string  |        | 输入框值，用v-model绑定                                      |
| label       | string  |        | 输入框标题                                                   |
| placeholder | string  |        | 输入框提示                                                   |
| readonly    | boolean | false  | 是否只读                                                     |
| labelWidth  | string  |        | 标题宽度，需带单位；例：labelWidth=“120px”                   |
| hideOnClick | boolean | true   | 点击蒙版隐藏                                                 |
| optionTitle | string  |        | 选项标题                                                     |
| options     | list    | []     | 选项，数组，例：[{key:'1',value:'男'}，{key: '2',value: '女'}] |

### 事件：

| 名字       | 参数 | 说明                             |
| ---------- | ---- | -------------------------------- |
| @on-select | obj  | 选择事件，将选中选项作为参数传出 |

### 插槽：

| 名字  | 说明             |
| ----- | ---------------- |
| label | 用于自定义标题栏 |



## XButton 按钮

### 使用：

```
<x-button text="登录" :disabled="fales" type="simple">
</x-button>
```

### 属性：

| 名字        | 类型    | 默认值 | 说明                                                         |
| ----------- | ------- | ------ | ------------------------------------------------------------ |
| text        | string  |        | 按钮文字                                                     |
| disabled    | boolean | false  | 是否可用                                                     |
| type        | string  | nomal  | 按钮样式；nomal、simple、error                               |



## XErrorMsg 错误提示

### 使用：

```
<x-error-msg title="非常抱歉"
                 content="无法完成登录，建议重新点击登录"
                 @on-confirm="checkOut"
                 v-model="showError">
</x-error-msg>
```

### 属性：

| 名字        | 类型    | 默认值 | 说明                       |
| ----------- | ------- | ------ | -------------------------- |
| value       | boolean | false  | 是否展示提示框,v-model绑定 |
| type        | string  | nomal  | nomal: 无按钮；            |
| title       | string  |        | 标题                       |
| content     | string  |        | 内容                       |
| hideOnClick | boolean | true   | 点击蒙版关闭选项栏         |
| confirmBtnText     | string  | '确定' | 确定按钮文字                |
| cancelBtnText     | string  | '取消' | 取消按钮文字                 |

### 事件：

| 名字        | 说明             |
| ----------- | ---------------- |
| @on-confirm | 点击确定触发事件 |
| @on-cancel  | 点击取消触发事件 |