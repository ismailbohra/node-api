// const mongoose =require("mongoose")

// const connect =mongoose.connect("mongodb://localhost:27017/ipsAcademy",{ useNewUrlParser:true,useUnifiedTopology:true})
// .then(()=>{console.log("connection successfull...")}).catch((err)=>{console.log(err)})

// module.exports=connect

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