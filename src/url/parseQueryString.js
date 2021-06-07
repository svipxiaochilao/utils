/**
 * @desc url参数转对象
 * @param {String} url default: window.location.href
 * @return {Object}
 * */
function parseQueryString(url = window.location.href) {
  // 判断是否有参数
  if (url.indexOf("?") === -1) {
    return {};
  }
  // 判断 ? 后面的字符串，判断是否有参数
  let search =
    url[0] === "?" ? url.substr(1) : url.substring(url.lastIndexOf("?") + 1);
  if (search === "") {
    return {};
  }
  // & 分割
  search = search.split("&");
  let query = {};
  // 为了兼容，不使用paes6语法
  for (let i = 0; i < search.length; i++) {
    let pair = search[i].split("=");
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
    // decodeURIComponent 函数是对被encodeURIComponent编码的url进行解码
  }
  return query || {};
}

module.exports = parseQueryString;
