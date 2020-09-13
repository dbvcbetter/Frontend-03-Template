const http = require('http')

const server = http.createServer((req, res) => {
  let body = []

  req.on('error', (err) => {
    console.error(err)
  })

  req.on('data', (chunk) => {
    body.push(chunk)
  })
  req.on('end', () => {
    body = Buffer.concat(body).toString()
    console.log('body: ', body)
    res.writeHead(200, {
      'Content-Type': 'text/plain',
    })
    // res.end('Hello world')
    res.end('<html><head><style>.app { color: blue; }</style></head><body><p class="app">wocao</p><img src="https://r.kezaihui.com" /></body></html>')
  })
})

server.listen('1337', '127.0.0.1', () => {
  console.log('server start on port 1337')
})