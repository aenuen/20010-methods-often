import { timeNewDate } from './timeNewDate'

/**
 * @description 获取时间戳
 * @param {*} [timeValue]
 * @returns {Number|Null}
 */
export const timeStamp = (timeValue: any) => {
  const theNewDate = timeValue ? timeNewDate(timeValue) : new Date()
  return theNewDate ? ~~(theNewDate.getTime() / 1000).toFixed(0) : null
}
