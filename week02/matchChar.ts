/**
 * 在一个字符串中，找到字符”a”
 * @param str string
 * @param char string
 */
const matchChar = (str: string, char: string): boolean => {
  for (let i of str) {
    if (i === char) {
      return true
    }
  }

  return false
}

export default matchChar
