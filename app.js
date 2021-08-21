const express = require('express')
const app = express()

app.get('/', function (req, res) {
  let timeout = 0
  if (Object.prototype.hasOwnProperty.call(req.query, 'timeout')) {
    timeout = parseInt(req.query.timeout, 10)
  }
  setTimeout(function () {
    res.send('Hello World!')
  }, timeout)
})

app.listen(3000, function () {
  console.log('Server ready')
})
