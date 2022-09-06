const studentCreatemodel=require("../model/student.model")
const connection = require("../config/index")

exports.createStudent=(req,res)=>{
    // let sql= `INSERT INTO student_data (id, userName, email, password, enrollment, mobileNumber, birthYear)
    //  VALUES (NULL, '${req.userName}', '${req.email}', '${req.password}', '${req.enrollment}', '${req.mobileNumber}', '${req.birthYear}')`
    // // let sql="CREATE TABLE student(id int)"
    // connection.query(sql,(err,result)=>{
    //     if (err) throw err
    //     console.log(result)
    // })
    // res.send({
    //     status:true,
    //     message:"inserted successfully"
    // })
}

exports.getStudent=(req,res)=>{
    let sql= `SELECT * FROM student_data`
    connection.query(sql,(err,result)=>{
        if (err) throw err
        res.send(result)
    })
}

exports.deleteStudent=(req,res)=>{
    // let sql= `DELETE FROM student_data WHERE student_data.id=${req.id}`
    // connection.query(sql,(err,result)=>{
    //     if (err) throw err
    //     console.log(result)
    //     if (result.insertId>0) {
    //         res.send({
    //             status:true,
    //             message:"deleted successfully"
    //         })        
    //     }
    //     else{
    //         res.send({
    //             status:false,
    //             message:"no record found"
    //         })
    //     }
    // })
}