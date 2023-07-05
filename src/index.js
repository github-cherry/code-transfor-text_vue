export default {
  install(Vue) {
    Vue.filter("CodeTransforText", CodeTransforText);
  }
}



export function CodeTransforText(data, dictionaries, config = { name: "name", value: "value" }) {
  // console.log(data, dictionaries);
  if (!Array.isArray(dictionaries)) {
    console.error("参数 dictionaries 必须是数组");
  }
  if (!data) {
    console.error("没有字典值");
    return "";
  }
  if (!dictionaries) {
    console.error("没有dictionaries参数");
    return ""
  }

  const value = data.toString();
  // 如果是,隔开的字符串多值转义
  if (value.includes(",")) {
    let data = [];
    for (let item of value.split(",")) {
      data.push(dictionaries.find(it => {
        return it[config.value] === item
      }));
    }
    return data.map(item => {
      return item[config.name]
    }).join(",")
  } else {
    // 如果是单值转义
    const data = dictionaries.find(item => {
      return item[config.value] === value
    });
    return data ? data[config.name] : value;
  }
}