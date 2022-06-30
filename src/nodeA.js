import WebSocket from 'ws'
import fetch from 'node-fetch'
import * as fs from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const ws = new WebSocket('ws://localhost:3000')

ws.on('open', () => {
  console.log('node A connected to web socket')
})

ws.on('message', data => {
  console.log(data.toString())
})

const filePath = path.join(__dirname, 'assets', 'cad_mesh.stl')
const length = fs.statSync(filePath).size
const readStream = fs.readFileSync(filePath, 'utf-8')

try {
  fetch('http://localhost:3001', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/text',
      'Content-Length': length
    },
    body: readStream
  })
} catch(e) {
  console.error(e)
}
