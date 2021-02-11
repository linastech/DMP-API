require('dotenv').config()
require('module-alias/register')
const bodyParser = require('body-parser')
const express = require('express')

const server = express()

// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }))
 // parse application/json
server.use(bodyParser.json())

server.use('/v1/', require('./routes/'))

server.listen(process.env.PORT, () => console.log(`API server has started on ${process.env.PORT} port!`))
