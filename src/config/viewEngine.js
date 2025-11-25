const path = require('path')          // module path
const express = require('express')   // commonjs module syntax

//configure view template engine
const configViewEngine = (app) => {
    app.set('views', path.join(__dirname, '../views'))      // set views directory
    app.set('view engine', 'ejs')                          // set view engine to ejs

    //config static files
    app.use(express.static(path.join(__dirname, '../public')))  //static files
}

module.exports = configViewEngine;