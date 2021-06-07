/**
 * @desc 格式化现在距 ${endTime} 的剩余时间
 * @param {Date} endTime
 * @return {String}
 */
function formatRemainTime(endTime) {
  if (!endTime) return "";
  let startDate = new Date(); //开始时间
  let endDate = new Date(endTime); // 结束时间
  let t = endDate.getTime() - startDate.getTime(); // 时间差
  // 大于结束时间，已过期
  if (t < 0) return "时间已过期";
  let d = 0,
    h = 0,
    m = 0,
    s = 0;
  if (t >= 0) {
    d = Math.floor(t / 1000 / 3600 / 24);
    h = Math.floor((t / 1000 / 60 / 60) % 24);
    m = Math.floor((t / 1000 / 60) % 60);
    s = Math.floor((t / 1000) % 60);
  }
  return (
    d.toString().padStart(2, "0") +
    "天 " +
    h.toString().padStart(2, "0") +
    "小时 " +
    m.toString().padStart(2, "0") +
    "分钟 " +
    s.toString().padStart(2, "0") +
    "秒"
  );
}

module.exports = formatRemainTime;
