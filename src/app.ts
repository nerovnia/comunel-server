import Fastify from 'fastify'

const app = Fastify({ logger: true }) // you can disable logging


app.get('/healthcheck', (req, res) => {
  res.send({ message: 'Success' })
})

async function main() {
  await app.listen({
    port: 8000,
    host: '0.0.0.0',
  })
}
main()

