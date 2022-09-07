// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '',
//   database : 'ipsacademy'
// });
 
// connection.connect((err)=>{
//     if (err) {
//         throw err
//     }
//     console.log("my sql connected")
// });

// module.exports=connection
module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "ipsacademy",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
