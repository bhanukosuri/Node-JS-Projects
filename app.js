const http = require('http')

const routes = require('./routes')

const { parse } = require('path')
const requestHandler = require('./routes')

// const server = http.createServer(routes)

console.log(routes.someText)
const server = http.createServer(routes.handler)


server.listen(3000)

