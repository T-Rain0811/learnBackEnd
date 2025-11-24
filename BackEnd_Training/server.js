const express = require('express')   // commonjs module syntax
const path = require('path')        // module path
require('dotenv').config()         // load environment variables from .env file

const app = express()                          // app express
const port = process.env.PORT || 8888         // port number
const hostname = process.env.HOST_NAME       // hostname

//configure view template engine
app.set('views', path.join(__dirname, '../src/views'))  // set views directory
app.set('view engine', 'ejs')                          // set view engine to ejs

//config static files
app.use(express.static(path.join(__dirname,'../src/public')))

// route handler
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test', (req, res) => {
  //res.send('<h1>Test route</h1><p>This is a test route</p>')
  res.render('sample.ejs')
})

// start the server
app.listen(port, hostname, () => {
  console.log(`Example app listening on port http://${hostname}:${port}`)
})
