const express = require('express')
const morgan = require('morgan')

//  express app
const app = express()

//  listen for requests
app.listen(3000)

// middleware static files
app.use(express.static('public'))

app.use(morgan('dev'))

// app.use((req, res, next) => {
//   console.log('new request made:')
//   console.log('host: ', req.hostname)
//   console.log('path: ', req.path)
//   console.log('method: ', req.method)
//   next();
// })

// app.use((req, res, next) => {
//   console.log('in the next middleware')
//   next();
// })

app.get('/', (req, res) => {
  //  res.send INFERS the type of data we are sending, also the status yeepe
  res.sendFile('./views/index.html', {root: __dirname})
})

app.get('/about', (req, res) => {
  res.sendFile('./views/about.html', {root: __dirname})
})

// redirects
app.get('/about-us', (req, res) => {
  res.redirect('/about')
})

// 404 error
app.use((req, res) => {
  res.sendFile('./views/404.html', {root: __dirname})
})
