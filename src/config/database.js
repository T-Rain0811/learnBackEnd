require('dotenv').config()                                 // load environment variables from .env file
const mysql = require('mysql2');  // import mysql2 for database connection

// Create the connection to database
const connection = mysql.createConnection({
  host: process.env.DB_HOST ,
  port: process.env.DB_PORT ,
  user: process.env.DB_USER ,
  password: process.env.DB_PASSWORD ,
  database: process.env.DB_NAME ,
});

module.exports = connection; 