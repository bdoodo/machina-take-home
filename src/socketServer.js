import { WebSocketServer } from "ws"
const wss = new WebSocketServer({ port: 3000 })

wss.on('connection', ws => {
  ws.on('message', async (data) => {
    broadcast(data.toString())
  })
})

function broadcast(msg) {
  for (const client of wss.clients) {
    client.send(msg)
  }
}