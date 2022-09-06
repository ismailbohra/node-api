const express=require("express")
const router=express.Router()
const getStudent=require("../controller/student.controller")
const validator=require("../controller/user/validator")

router.get("/",getStudent.findAll)
router.post('/createStudent',validator,getStudent.create)
router.get("/:id",getStudent.findById)
router.delete("/delete/:id",getStudent.delete)
router.put("/update/:id",getStudent.update)


module.exports=router