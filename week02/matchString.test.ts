import matchString from './matchString'

describe('测试matchString', () => {
  it('可以匹配到结果', () => {
    expect(matchString('asdfg', 'sd')).toBe(true)
    expect(matchString('asdfg', 's')).toBe(true)
  })

  it('匹配不到结果', () => {
    expect(matchString('asdfg', 'hu')).toBe(false)
    expect(matchString('asdfg', 'sf')).toBe(false)
    expect(matchString('', 'dd')).toBe(false)
  })
})
