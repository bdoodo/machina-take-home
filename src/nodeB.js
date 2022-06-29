import express from 'express'
import WebSocket from 'ws'

const ws = new WebSocket('ws://localhost:3000')
const app = express()

app.post('/', (req, res) => {
  console.log(req.body)

  ws.send('hi')
})

app.listen(3001, () => {
  console.log('node B listening on port 3001')
})

ws.on('open', () => {
  console.log('node B connected to web socket')
})