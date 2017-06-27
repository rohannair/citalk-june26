const adder = (x, y) => Promise.resolve(x + y)
const subtracter = (x, y) => Promise.resolve(x - y)
const multiplier = (x, y) => Promise.resolve(x * y)
const divider = (x, y) => Promise.resolve(x / y)

module.exports = {
  adder,
  subtracter,
  multiplier,
  divider,
}
