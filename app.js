const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, "public")))

const index = require('./routes/index')
app.use('/', index)

module.exports = app