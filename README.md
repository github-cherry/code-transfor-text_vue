# code-transfor-text_vue
<<<<<<< HEAD
基于vue的汉字提取指令。将码对应的汉字提取并返回。支持单码和多码提取
=======

基于vue的汉字提取指令。将码对应的汉字提取并返回
>>>>>>> 30c44c8d45bfedb0e34ea1b2ccf31b3303db7466









**安装：**

<<<<<<< HEAD
```
=======
<<<<<<< HEAD
>>>>>>> 30c44c8d45bfedb0e34ea1b2ccf31b3303db7466
npm install code-transfor-text_vue
```

=======
```
npm install code-transfor-text_vue
```
>>>>>>> 0feb50cc50c1e3d346bbd3c4981623c249c424ef


**引入：**

<<<<<<< HEAD
```javascript
=======
<<<<<<< HEAD
>>>>>>> 30c44c8d45bfedb0e34ea1b2ccf31b3303db7466
import CodeTransforText from 'code-transfor-text_vue'
```

=======
```javascript
import CodeTransforText from 'code-transfor-text_vue'
```
>>>>>>> 0feb50cc50c1e3d346bbd3c4981623c249c424ef


**注册：**

<<<<<<< HEAD
```javascript
=======
<<<<<<< HEAD
>>>>>>> 30c44c8d45bfedb0e34ea1b2ccf31b3303db7466
Vue.use(CodeTransforText)
```

=======
```javascript
Vue.use(CodeTransforText)
```
>>>>>>> 0feb50cc50c1e3d346bbd3c4981623c249c424ef


**使用：**

<<<<<<< HEAD
```
codeTransforText(dictionaries, config);
```



| 参数         | 格式          | 说明                             | 案例                                                         | 默认值                           |
| ------------ | ------------- | -------------------------------- | ------------------------------------------------------------ | -------------------------------- |
| Value        | String        | 要汉化的码，如果是多值就用,隔开  | "1"或者“1,3,5,7”                                             | 必传                             |
| dictionaries | [{},{},{}...] | 要转汉字的合集                   | [{ name: "龙泽", value: "001" }, { name: "西二旗", value: "002" }, { name: "上地", value: "003" }] | 必传                             |
| config       | {}            | 配置dictionaries的名称和取值字段 | { name: "station_name", value: "station_value" }             | { name: "name", value: "value" } |
=======
<<<<<<< HEAD
codeTransforText(dictionaries, config);
=======
```
codeTransforText(dictionaries, config);
```
>>>>>>> 0feb50cc50c1e3d346bbd3c4981623c249c424ef

| 参数         | 格式          | 说明                             | 案例                                                         | 默认值                                     |
| ------------ | ------------- | -------------------------------- | ------------------------------------------------------------ | ------------------------------------------ |
| dictionaries | [{},{},{}...] | 要转汉字的合集                   | [{ station_value: "龙泽", station_value: "001" },{ station_value: "西二旗", station_value: "002" }，{ station_value: "上地", station_value: "003" }] | 必传                                       |
| config       | {}            | 配置dictionaries的名称和取值字段 | { name: "station_name", value: "station_value" }             | { name: "code_name", value: "code_value" } |
<<<<<<< HEAD
|              |               |                                  |                                                              |                                            |
=======
>>>>>>> 0feb50cc50c1e3d346bbd3c4981623c249c424ef
>>>>>>> 30c44c8d45bfedb0e34ea1b2ccf31b3303db7466



**案例**

1. ```html
<<<<<<< HEAD
   <div>
     供电性质：{{ powerType | codeTransforText(dropdowns.nature) }}
   </div>
   
=======
   <el-table-column show-overflow-tooltip label="供电性质">
     <template slot-scope="scope">
       {{ scope.row.powerType | codeTransforText(dropdowns.nature) }}
     </template>
   </el-table-column>
<<<<<<< HEAD
=======
   ```
>>>>>>> 0feb50cc50c1e3d346bbd3c4981623c249c424ef

>>>>>>> 30c44c8d45bfedb0e34ea1b2ccf31b3303db7466
2. ```html
   <div>
     隶属区域：{{ constructionUuid | tansfortext(dropdowns.constructionUuid, {name:"construction",value: "uuid"}) }}
   </div>
   ```

3. ```
   let chargePort = "1,2,5,7";
   console.log(this.$options.filters.tansfortext(chargePort, this.dropdowns.chargePort));
   ```















