require('dotenv').config()                                 // load environment variables from .env file
const express = require('express')                        // commonjs module syntax
const path = require('path')                             // module path
const configViewEngine = require('./config/viewEngine') // import view engine configuration
const webRoutes = require('./routes/web') // import web routes

const app = express()                          // app express
const port = process.env.PORT || 8888         // port number
const hostname = process.env.HOST_NAME       // hostname

//configure view template engine
configViewEngine(app);

//setup routes
app.use('/v1', webRoutes);

// start the server
app.listen(port, hostname, () => {
  console.log(`Example app listening on port http://${hostname}:${port}`)
})
