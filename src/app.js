const express=require("express")
// const connection = require("./config")
const app=express()
const port=process.env.port|| 4000
// const userValidation = require("./controller/user/validator");
// const create=require("./routes/route")


require("./config/index")

app.use(express.json())

// app.get("/student",(req,res)=>{
//     let sql= `SELECT * FROM student_data`
//     connection.query(sql,(err,result)=>{
//         if (err) throw err
//         res.send(result)
//     })
// })


// // app.use("/createStudent",create)


// app.post("/student/create",userValidation,(req,res)=>{ 
//     let sql= `INSERT INTO student_data (id, userName, email, password, enrollment, mobileNumber, birthYear)
//      VALUES (NULL, '${req.body.userName}', '${req.body.email}', '${req.body.password}', '${req.body.enrollment}', '${req.body.mobileNumber}', '${req.body.birthYear}')`
//     // let sql="CREATE TABLE student(id int)"
//     connection.query(sql,(err,result)=>{
//         if (err) throw err
//         console.log(result)
//     })
//     res.send({
//         status:true,
//         message:"inserted successfully"
//     })
// })

// app.delete("/student/delete",(req,res)=>{ 
//     let sql= `DELETE FROM student_data WHERE student_data.id=${req.body.id}`
//     connection.query(sql,(err,result)=>{
//         if (err) throw err
//         console.log(result)
//         if (result.insertId>0) {
//             res.send({
//                 status:true,
//                 message:"deleted successfully"
//             })        
//         }
//         else{
//             res.send({
//                 status:false,
//                 message:"no record found"
//             })
//         }
//     })
    
// })

const studenCreate=require("./routes/route")
app.use("/student",studenCreate)


app.listen(port,()=>{
    
    console.log(`listening at port ${port}`)
})