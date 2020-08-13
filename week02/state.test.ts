import match from './state'

describe('测试state', () => {
  it('可以匹配到', () => {
    expect(match('abababxefghi')).toBe(true)
    expect(match('abaabcaabababx')).toBe(true)
  })

  it('匹配不到', () => {
    expect(match('ababaaa')).toBe(false)
    expect(match('ababrrr')).toBe(false)
    expect(match('bbab')).toBe(false)
    expect(match('a')).toBe(false)
    expect(match('ab')).toBe(false)
    expect(match('abax')).toBe(false)
    expect(match('abababfff')).toBe(false)
    expect(match('difuiei')).toBe(false)
    expect(match('')).toBe(false)
  })
})