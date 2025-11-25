require('dotenv').config()                                 // load environment variables from .env file
const express = require('express')                        // commonjs module syntax
const configViewEngine = require('./config/viewEngine')  // import view engine configuration
const webRoutes = require('./routes/web')               // import web routes
const connection = require('./config/database')        // import database connection

const app = express()                          // app express
const port = process.env.PORT || 8888         // port number
const hostname = process.env.HOST_NAME       // hostname

//configure view template engine
configViewEngine(app);

//setup routes
app.use('/v1', webRoutes);

// A simple SELECT query
connection.query(
  'SELECT * from Users u',
  function (err, results, fields) {
    console.log(">>>results: ",results); // results contains rows returned by server
  }
);

// start the server
app.listen(port, hostname, () => {
  console.log(`Example app listening on port http://${hostname}:${port}/v1`)
})
