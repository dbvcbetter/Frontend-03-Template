
import matchChar from './matchChar'

describe('测试matchChar', () => {
  it('可以找到结果', () => {
    expect(matchChar('asdfgh', 'g')).toBe(true)
    expect(matchChar('a', 'a')).toBe(true)
    expect(matchChar('erttttrf', 'e')).toBe(true)
  })

  it('找不到结果', () => {
    expect(matchChar('adfg', 'b')).toBe(false)
    expect(matchChar('r', 'g')).toBe(false)
  })
})
