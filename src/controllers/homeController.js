const connection = require('../config/database')        // import database connection

const getHomePage = (req, res) => {
    let users = [];

    // A simple SELECT query
    connection.query(
        'SELECT * from Users u',
        function (err, results, fields) {
            users = results;
            // res.send(JSON.stringify(users));
        }
    );
    
    //render home page
    return res.render('home')
}

const getTestPage = (req,res) => {
    res.render('sample')
}

module.exports = {
    getHomePage,
    getTestPage
}