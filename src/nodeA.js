import WebSocket from 'ws'
import fetch from 'node-fetch'

const ws = new WebSocket('ws://localhost:3000')

ws.on('open', () => {
  console.log('node A connected to web socket')
})

ws.on('message', data => {
  console.log(data.toString())
})

fetch('http://localhost:3001', {
  method: 'POST',
  body: 'hello'
})

