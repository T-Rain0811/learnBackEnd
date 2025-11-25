const connection = require('../config/database')        // import database connection

const getHomePage = async (req, res) => {
    let users = [];

    // A simple SELECT query
    // connection.query(
    //     'SELECT * from Users u',
    //     function (err, results, fields) {
    //         users = results;
    //         // res.send(JSON.stringify(users));
    //     }
    // );
    const [results, fields] = await connection.query(
        'SELECT * from Users u'
    );
    users = results;
    console.log(users);
    //render home page
    return res.render('home')
}

const getTestPage = (req,res) => {
    res.render('sample')
}

const getCreatePage = (req,res) => {
    res.render('createUsers')
}

const postAddUser = async (req,res) => {

    // let email = req.body.email;
    // let name = req.body.name;
    // let city = req.body.city;
    let {email, name, city} = req.body;

    // connection.query(
    //     `INSERT INTO Users (email, name, city) VALUES (?,?,?)`,[email, name, city],
    //     (err, results, fields) => {
    //             console.log(results);
    //             res.send('User added successfully!');
    //     }
    // );

    const [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?,?,?)`,[email, name, city]
    );

    console.log(results);
    res.send('User added successfully!');
    
}

module.exports = {
    getHomePage,
    getTestPage,
    postAddUser,
    getCreatePage
}