function getFormat(str) {
  if (!str) {
    return;
  }
  // 判断数据类型
  let first = str.substr(0, 1);
  let last = str.substr(str.length - 1, 1);
  // console.log(last, first)
  if (first === "[" && last === "]") {
    return JSON.parse(str);
  } else if (first === "{") {
    return JSON.parse(str);
  } else {
    return JSON.parse(JSON.stringify(str));
  }
}

let storage = {
  /**
   * @desc localStorageSet本地存储
   * 目前对象值如果是函数 、RegExp等特殊对象存贮会被忽略
   * @param { String } key  属性
   * @param { string } value 值
   */
  localStorageSet: function(key, value) {
    // 存储数组
    if (typeof value === "object") value = JSON.stringify(value);
    localStorage.setItem(key, value);
  },
  /**
   * @desc sessionStorageSet本地存储
   * 目前对象值如果是函数 、RegExp等特殊对象存贮会被忽略
   * @param { String } key  属性
   * @param { string } value 值
   */
  sessionStorageSet: function(key, value) {
    // 存储数组
    if (typeof value === "object") value = JSON.stringify(value);
    sessionStorage.setItem(key, value);
  },
  /**
   *  localStorage 获取
   * @param {String} key  属性
   */
  localStorageGet: function(key) {
    let str = localStorage.getItem(key);
    // console.log(str)
    return getFormat(str);
  },
  /**
   *  sessionStorageGet 获取
   * @param {String} key  属性
   */
  sessionStorageGet: function(key) {
    let str = sessionStorage.getItem(key);
    // console.log(str)
    return getFormat(str);
  },
  /**
   * localStorageRemove 移除
   * @param {String} key  属性
   */
  localStorageRemove: function(key) {
    localStorage.removeItem(key);
  },
  /**
   * sessionStorageRemove 移除
   * @param {String} key  属性
   */
  sessionStorageRemove: function(key) {
    sessionStorage.removeItem(key);
  }
};

module.exports = storage;
