const { adder } = require('../lib/actions')

describe('adder', () => {
  it('should return a Promise', async () => {
    const resultPromise = adder(2, 2)
    expect(resultPromise instanceof Promise).toBe(true)
  })

  it('should add 2 and 2', async () => {
    const result = await adder(2, 2)
    expect(result).toBe(4)
  })
})
