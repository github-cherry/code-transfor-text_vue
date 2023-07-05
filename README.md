# code-transfor-text_vue
基于vue的字典码转译提取的[过滤器](https://blog.csdn.net/qq_42618566/article/details/107784878)。将码对应的业务名称提取并返回



大家是不是见到过这种代码：

```html
<div v-if="code===1">龙泽</div>
<div v-else-if="code===2">西二旗</div>
<div v-else-if="code===3">上地</div>
<div v-else-if="code===4">沙河</div>
<div v-else="code===5">八宝山</div>
...
<div v-else="code===99">月牙山</div>
```

有多少码就写了多少遍，重点是写死的不灵活。快放弃这么臃肿的代码吧

```html
<div>地址：{{ address | CodeTransforText(dropdowns.address) }}</div>
```

一行就搞定，这多简洁



**安装：**

```
npm install code-transfor-text_vue
```

**引入：**

```javascript
import CodeTransforText from 'code-transfor-text_vue'
或者
import {CodeTransforText} from 'code-transfor-text_vue'
```

**注册：**

```javascript
Vue.use(CodeTransforText)
或者
.vue文件里  filters:{CodeTransforText}
```

**使用：**

```
CodeTransforText(dictionaries, config);
```

| 参数         | 格式          | 说明                             | 案例                                                         | 默认值                           |
| ------------ | ------------- | -------------------------------- | ------------------------------------------------------------ | -------------------------------- |
| value        | String        | 要汉化的码，如果是多值就用`,`隔开 | `"1"` 或者 `“1,3,5,7”`                                     | 必传                             |
| dictionaries | [{},{},{}...] | 要转汉字的合集                   | [{ name: "龙泽", value: "1" }, { name: "西二旗", value: "2" }, { name: "上地", value: "3" },{ name: "沙河", value: "4" },{ name: "八宝山", value: "5" }] | 必传                             |
| config       | {}            | 配置dictionaries的名称和取值字段 | { name: "station_name", value: "station_value" }             | { name: "name", value: "value" } |




**案例**

1. ```html
   <div>
     供电性质：{{ powerType | CodeTransforText(dropdowns.nature) }}
   </div>
   
2. ```html
   <div>
     隶属区域：{{ constructionUuid | CodeTransforText(dropdowns.constructionUuid, {name:"construction",value: "uuid"}) }}
   </div>
   ```

3. ```javascript
   let chargePort = "1,2,5,7";
   console.log(this.$options.filters.CodeTransforText(chargePort, this.dropdowns.chargePort));
   ```



> [更多问题？https://ask.csdn.net/questions/7970404](https://ask.csdn.net/questions/7970404)







