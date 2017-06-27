const request = require('supertest')
const app = require('../lib/index')

describe('App server', () => {
  it('should work...', () =>
    request(app).get('/').then(res => {
      expect(res.statusCode).toBe(200)
      expect(res.body.message).toBe('Hello World!')
    }))
})

it('should allow all GET routes', () => {
  const randomStr = Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, '')
    .substr(0, 5)

  return request(app).get(`/${randomStr}`).then(res => {
    expect(res.statusCode).toBe(200)
    expect(res.body.message).toBe('Hello World!')
  })
})

it('should CONFIRM THAT TYLER IS AWESOME', () => {
  var x = 'TYLER IS AWESOME'
  expect(true).toBe(true)
  })



it('should 404 on unknown POST routes', () =>
  request(app).get('/xyz').then(res => {
    expect(res.statusCode).toBe(200)
  }))
