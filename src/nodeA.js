import WebSocket from 'ws'
import fetch from 'node-fetch'
import fs from 'fs'
import prompt from 'prompt'

// connect to web sockets
const ws = new WebSocket('ws://localhost:3000')

ws.on('open', () => {
  sendFile()
})

ws.on('error', () => {
  console.log('Could not connect to web socket.')
})

// receive file data and save
ws.on('message', function (data) {
  fs.writeFile('output.stl', data, (err) => {
    if (err) throw new Error(err)

    console.log('output saved to current folder!')
  })
})

// prompt user for file path
const getFilePath = new Promise(res => {
  prompt.start()

  prompt.get(['enter the filepath to your stl input'], (err, result) => {
    if (err) throw new error(err)

    res(result['enter the filepath to your stl input'])
  })
})

// send file to node B
async function sendFile() {
  const filePath = await getFilePath

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
  } catch (e) {
    console.error(e)
  }
}