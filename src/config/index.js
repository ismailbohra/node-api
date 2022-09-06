var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'ipsacademy'
});
 
connection.connect((err)=>{
    if (err) {
        throw err
    }
    console.log("my sql connected")
});

module.exports=connection