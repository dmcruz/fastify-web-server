'use strict'

const hello = `<html>
  <style>
    body { background: #333; margin: 1.25rem }
    h1 { color: #eee; font-family: sans-serif }
  </style>
  <body>
    <h1>Hello World</h1>
  </body>
</html>`
module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    reply.type('text/html')
    return hello
  })
}
