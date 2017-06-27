// This is my code
'use strict'

const chalk = require('chalk')
const debug = require('debug')
const express = require('express')
const bodyParser = require('body-parser')

const log = debug('app:log')
const error = debug('app:error')

const { adder, subtracter, multiplier, divider } = require('./actions')

const app = express()
app
  .use(bodyParser.json())
  .post('/add', async (req, res) => {
    let [first, last] = req.body
    let result = await adder(first, last)
    res.send({ result })
  })
  .post('/subtract', async (req, res) => {
    let [first, last] = req.body
    let result = await subtracter(first, last)
    res.send({ result })
  })
  .post('/multiply', async (req, res) => {
    let [first, last] = req.body
    let result = await multiplier(first, last)
    res.send({ result })
  })
  .post('/divide', async (req, res) => {
    let [first, last] = req.body
    let result = await divider(first, last)
    res.send({ result })
  })
  .get('*', (_, res) => {
    res.send({ message: 'Hello World!' })
  })

const server = app.listen(3000, err => {
  if (err) error(err)
  const { address: host, port } = server.address()
  log(`Example app listening at http://${host}:${port}`)
})

module.exports = server
