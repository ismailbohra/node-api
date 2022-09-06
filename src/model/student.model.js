var dbConn = require('../config/index');

//Student object create
var Student = function(student){
    this.userName     = student.userName;
    this.email          = student.email;
    this.phone          = student.phone;
    this.enrollment   = student.enrollment;
    this.dob          = student.dob;
};
Student.create = function (newEmp, result) {    
    dbConn.query("INSERT INTO student_data set ?", newEmp, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });           
};
Student.findById = function (id, result) {
    dbConn.query("Select * from student_data where id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Student.findAll = function (result) {
    dbConn.query("Select * from student_data", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('employees : ', res);  
            result(null, res);
        }
    });   
};
Student.update = function(id, student, result){
  dbConn.query("UPDATE student_data SET userName=?,email=?,phone=?,enrollment=?,dob=? WHERE id = ?", [student.userName,student.email,student.phone,student.enrollment,student.dob, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Student.delete = function(id, result){
     dbConn.query("DELETE FROM employees WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Student;