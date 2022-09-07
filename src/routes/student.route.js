const express=require("express")
const router=express.Router()

const controller=require("../controller/index")

const getStudent=controller.student_controller
const validator=require("../validation/student.validation")

router.get("/",getStudent.findAll)
router.post('/createStudent',getStudent.create)
router.get("/:id",getStudent.findOne)
router.delete("/delete/:id",getStudent.delete)
router.put("/update/:id",getStudent.update)


module.exports=router