const express=require("express")
const router=express.Router()
const validator=require("../controller/user/validator")
const getStudent=require("../controller/student.controller")

// router.post('/createStudent',validator(),getStudent.createStudent())
router.get("/",getStudent.getStudent())
// router.post("/student/delete",getStudent.deleteStudent())


module.exports=router