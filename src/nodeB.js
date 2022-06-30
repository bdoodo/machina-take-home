import express from 'express'
import WebSocket from 'ws'

const ws = new WebSocket('ws://localhost:3000')
const app = express()

app.use(express.raw({type: 'application/sla', limit: '100mb'}))

app.post('/', async (req, res) => {
  req.accepts('application/sla')
  ws.send(req.body)
  res.status(201)
})

app.listen(3001, () => {
  console.log('node B listening on port 3001')
})

ws.on('open', () => {
  console.log('node B connected to web socket')
})