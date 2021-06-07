/**
 * @desc 格式化${startTime} 距现在的已过时间
 * @param {Date} startTime
 * @return {String}
 */
function formatPassTime(startTime) {
  if (!startTime) return "";
  let currentTime = Date.parse(new Date()),
    time = currentTime - startTime;
  // 拿时间差去除，相对应的没有则为 0
  let timeArr = [
    parseInt(time / ((1000 * 60 * 60 * 24) / 30 / 12)), // 年
    parseInt(time / (1000 * 60 * 60 * 24) / 30), // 月
    parseInt(time / (1000 * 60 * 60 * 24)), // 天
    parseInt(time / (1000 * 60 * 60)), // 小时
    parseInt(time / (1000 * 60)) // 分钟
  ];
  let timeNameArr = ["年前", "月前", "天前", "小时前", "分钟前"];
  for (let i = 0; i < timeArr.length; i++) {
    if (timeArr[i]) {
      // 补0
      return timeArr[i].toString().padStart(2, "0") + timeNameArr[i];
    }
  }
  return "刚刚";
}

module.exports = formatPassTime;
