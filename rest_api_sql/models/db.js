const mysql = require("mysql")
const configDB = require("../config/configDB")

//create db connection
const connection = mysql.createConnection({
    host:configDB.host,
    user:configDB.user,
    password:configDB.password,
    database:configDB.database
})
connection.connect((err)=>{
    if(err) throw err
    console.log("connected success!");
})
module.exports = connection