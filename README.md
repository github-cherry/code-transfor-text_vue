# code-transfor-text_vue
基于vue的汉字提取过滤器。将码对应的汉字提取并返回。支持单码和多码提取











**安装：**

```
npm install code-transfor-text_vue
```


**引入：**

```javascript
import CodeTransforText from 'code-transfor-text_vue'
```


**注册：**

```javascript
Vue.use(CodeTransforText)
```


**使用：**

```
CodeTransforText(dictionaries, config);
```

| 参数         | 格式          | 说明                             | 案例                                                         | 默认值                           |
| ------------ | ------------- | -------------------------------- | ------------------------------------------------------------ | -------------------------------- |
| Value        | String        | 要汉化的码，如果是多值就用`,`隔开 | "1"或者“1,3,5,7”                                             | 必传                             |
| dictionaries | [{},{},{}...] | 要转汉字的合集                   | [{ name: "龙泽", value: "001" }, { name: "西二旗", value: "002" }, { name: "上地", value: "003" }] | 必传                             |
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















