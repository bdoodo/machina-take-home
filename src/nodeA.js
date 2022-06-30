import WebSocket from 'ws'
import fetch from 'node-fetch'
import fs from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const ws = new WebSocket('ws://localhost:3000')

ws.on('open', () => {
  console.log('node A connected to web socket')
})

// receive file data and save
ws.on('message', function(data) {
  console.log(data.byteLength)
  fs.writeFile('output.stl', data, console.error)
})

const filePath = path.join(__dirname, 'assets', 'cad_mesh.stl')
const length = fs.statSync(filePath).size
const readStream = fs.createReadStream(filePath)

try {
  fetch('http://localhost:3001', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/sla',
      'Content-Length': length
    },
    body: readStream
  })
} catch(e) {
  console.error(e)
}
