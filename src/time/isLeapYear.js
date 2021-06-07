/**
 *
 * @desc 是否为闰年
 * @param {Number} year
 * @returns {Boolean}
 */

function isLeapYear(year) {
  return new Date(year, 2, 0).getDate() === 29;
}

module.exports = isLeapYear;
