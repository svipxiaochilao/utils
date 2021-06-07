/**
 * @desc 对象序列化，以 & 拼接
 * @param {Object} obj
 * @return {String}
 */
function stringfyQueryString(obj = {}) {
  let pairs = [];
  for (let key in obj) {
    let value = obj[key];
    // 如果是数组，扁平化
    if (value instanceof Array) {
      for (let i = 0; i < value.length; ++i) {
        // 使用 encodeURIComponent 进行编码 如{ arr: [1, 3, 5]} => arr[0]=1&arr[1]=3...  “[]”会被编译"%5B%5D"
        pairs.push(
          encodeURIComponent(key + "[" + i + "]") +
            "=" +
            encodeURIComponent(value[i])
        );
      }
      // 是数组跳过
      continue;
    }
    pairs.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
  }
  // 最后拼接返回
  return pairs.join("&");
}

module.exports = stringfyQueryString;
