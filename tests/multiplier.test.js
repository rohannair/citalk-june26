const { multiplier } = require('../lib/actions')

describe('multiplier', () => {
  it('should return a Promise', async () => {
    const resultPromise = multiplier(2, 2)
    expect(resultPromise instanceof Promise).toBe(true)
  })

  it('should multiply 2 and 2', async () => {
    const result = await multiplier(2, 2)
    expect(result).toBe(4)
  })

  it('should properly multiply by 0', async () => {
    const result = await multiplier(0, 2)
    expect(result).toBe(0)
  })

  it('should properly multiply negatives', async () => {
    const result = await multiplier(-2, -2)
    expect(result).toBe(4)
  })

  it('should properly multiply negatives and positives', async () => {
    const result = await multiplier(-2, 2)
    expect(result).toBe(-4)
  })
})
