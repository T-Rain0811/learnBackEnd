const connection = require('../config/database');        // import database connection
const { getAllUsers, postUser } = require('../services/homeService');

const getHomePage = async (req, res) => {
    let results = await getAllUsers();
    console.log(results);
    //render home page
    return res.render('home',{users: results});
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

    let results = await postUser(email, name, city);

    console.log(results);
    res.send('User added successfully!');
    
}

module.exports = {
    getHomePage,
    getTestPage,
    postAddUser,
    getCreatePage
}