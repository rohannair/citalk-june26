const { divider } = require('../lib/actions')

describe('divider', () => {
  it('should return a Promise', async () => {
    const resultPromise = divider(2, 2)
    expect(resultPromise instanceof Promise).toBe(true)
  })

  it('should divide 2 and 2', async () => {
    const result = await divider(2, 2)
    expect(result).toBe(1)
  })

  it('should properly divide by 0', async () => {
    const result = await divider(2, 0)
    expect(result).toBe(Infinity)
  })

  it('should properly divide negatives', async () => {
    const result = await divider(-2, -2)
    expect(result).toBe(1)
  })

  it('should properly divide negatives and positives', async () => {
    const result = await divider(-2, 2)
    expect(result).toBe(-1)
  })

  it('should properly divide fractions', async () => {
    const result = await divider(1, 2)
    expect(result).toBe(0.5)
  })
})
