const connection = require('../config/database')        // import database connection

const getAllUsers = async () => {
    const [results, fields] = await connection.query(
        'SELECT * from Users u'
    );
    return results;
}

const postUser = async (email, name, city) => {
    const [results, fields] = await connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?,?,?)`,[email, name, city]
    );
    return results;
}

module.exports = {
    getAllUsers,
    postUser
}