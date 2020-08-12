/**
 * 不准使用正则表达式，纯粹用 JavaScript 的逻辑实现：在一个字符串中，找到字符“ab”
 * @param sourceStr string
 * @param targetStr string
 */
const matchString = (sourceStr: string, targetStr: string): boolean => {
  if (sourceStr.length < targetStr.length) {
    return false
  }

  if (sourceStr.startsWith(targetStr)) {
    return true
  }

  return matchString(sourceStr.slice(1), targetStr)
}

export default matchString
