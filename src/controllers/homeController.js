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

const postAddUser = (req,res) => {

    console.log(">>>check req.body: ",req.body)
    // let email = req.body.email;
    // let name = req.body.name;
    // let city = req.body.city;
    let {email, name, city} = req.body;

    connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?,?,?)`,[email, name, city],
        (err, results, fields) => {
                console.log(results);
                res.send('User added successfully!');
        }
    );
    
}

module.exports = {
    getHomePage,
    getTestPage,
    postAddUser
}