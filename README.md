# code-transfor-text_vue

基于vue的汉字提取指令。将码对应的汉字提取并返回









**安装：**

<<<<<<< HEAD
npm install code-transfor-text_vue

=======
```
npm install code-transfor-text_vue
```
>>>>>>> 0feb50cc50c1e3d346bbd3c4981623c249c424ef


**引入：**

<<<<<<< HEAD
import CodeTransforText from 'code-transfor-text_vue'

=======
```javascript
import CodeTransforText from 'code-transfor-text_vue'
```
>>>>>>> 0feb50cc50c1e3d346bbd3c4981623c249c424ef


**注册：**

<<<<<<< HEAD
Vue.use(CodeTransforText)

=======
```javascript
Vue.use(CodeTransforText)
```
>>>>>>> 0feb50cc50c1e3d346bbd3c4981623c249c424ef


**使用：**

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



**案例**

1. ```html
   <el-table-column show-overflow-tooltip label="供电性质">
     <template slot-scope="scope">
       {{ scope.row.powerType | codeTransforText(dropdowns.nature) }}
     </template>
   </el-table-column>
<<<<<<< HEAD
=======
   ```
>>>>>>> 0feb50cc50c1e3d346bbd3c4981623c249c424ef

2. ```html
   <el-table-column show-overflow-tooltip label="隶属区域" prop="constructionUuid">
     <template slot-scope="scope">
       {{ scope.row.constructionUuid | tansfortext(dropdowns.constructionUuid,{name:"construction",value: "uuid"}) }}
     </template>
   </el-table-column>
   ```









