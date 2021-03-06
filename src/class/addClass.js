/**
 * @desc   为元素添加class
 * @param  {HTMLElement} ele
 * @param  {String} cls
 */

let hasClass = require("./hasClass");

function addClass(ele, cls) {
  if (!hasClass(ele, cls)) {
    ele.className += " " + cls;
  }
}

module.exports = addClass;
