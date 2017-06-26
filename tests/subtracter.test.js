const { subtracter } = require('../lib/actions')

describe('subtracter', () => {
  it('should return a Promise', async () => {
    const resultPromise = subtracter(2, 2)
    expect(resultPromise instanceof Promise).toBe(true)
  })

  it('should add 2 and 2', async () => {
    const result = await subtracter(2, 2)
    expect(result).toBe(0)
  })

  it('should return negatives properly', async () => {
    const result = await subtracter(0, 2)
    expect(result).toBe(-2)
  })
})
