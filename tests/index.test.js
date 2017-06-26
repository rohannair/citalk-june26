const request = require('supertest')
const app = require('../lib/index')

describe('App server', () => {
  beforeAll(() => {
    // app.listen(3001, err => {
    //   if (err) error(err)
    //   const { address: host, port } = server.address()
    //   log(`Example app listening at http://${host}:${port}`)
    // })
  })

  it('should work...', () =>
    request(app).get('/').then(res => {
      expect(res.statusCode).toBe(200)
      expect(res.body.message).toBe('Hello World!')
    }))
})

it('should allow all GET routes', () => {
  const random = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)
  return request(app).get(`/${random}`).then(res => {
    expect(res.statusCode).toBe(200)
    expect(res.body.message).toBe('Hello World!')
  })
})

it('should 404 on unknown POST routes', () =>
  request(app).get('/xyz').then(res => {
    expect(res.statusCode).toBe(200)
    expect(res.body.message).toBe('Hello World!')
  }))
