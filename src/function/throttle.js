/**
 * 节流函数
 * @param method 事件触发的操作
 * @param mustRunDelay 间隔多少毫秒需要触发一次事件
 */
function throttle(method, mustRunDelay) {
  let timer,
    args = arguments,
    start; // 第一次执行时间
  return function loop() {
    let self = this;
    let now = Date.now(); // 开始执行时间
    if (!start) {
      start = now; // 第一次执行时间等于开始执行时间
    }
    if (timer) {
      // 连续触发先清除定时器
      clearTimeout(timer);
    }
    if (now - start >= mustRunDelay) {
      // 如果开始执行时间 - 上一次执行时间 > 设定的间隔时间
      method.apply(self, args);
      start = now; // 重新设定上次执行时间
    } else {
      timer = setTimeout(function() {
        // 10毫秒重新执行一次
        loop.apply(self, args);
      }, 10);
    }
  };
}

module.exports = throttle;
