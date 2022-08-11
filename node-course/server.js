const http = require('http')
const fs = require('fs')

const server = http.createServer( (req, res) => {
  console.log(req.url, req.method);

  // set header content type (text could be plain or html)
  res.setHeader('Content-type','text/html')

  let path = './views/'
  switch (req.url) {
    case '/':
      path += 'index.html'
      break
    case '/about':
      path += 'about.html'
      break
    // Here, a redirect
    case '/about-me':
      res.statusCode = 301
      res.setHeader('Location','/about')
      res.end()
    default:
      path += '404.html'
      break
  }

  // send an html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end()
    } else {
      res.end(data)
    }
  })
})

server.listen(3000, 'localhost', () => {
  console.log('Listening on 3000')
})
