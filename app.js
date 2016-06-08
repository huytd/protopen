const Server = require('./server.js')
const port = (process.env.PORT || 3500)
const path = require('path')
const express = require('express')

const app = express()
const indexPath = path.join(__dirname, '/index.html')
const publicPath = express.static(__dirname)

app.use('/', publicPath)
app.get('/', function (_, res) { res.sendFile(indexPath) })

app.listen(port)
console.log(`Listening at http://localhost:${port}`)
