const express=require("express")
const router=express.Router()
const fs=require("fs")
const path=require("path")
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerJSDocs = YAML.load(path.join(__dirname,"../util/yaml/studentapi.yaml"));

const controller=require("../controller/index")

const getStudent=controller.student_controller
const validator=require("../validation/student.validation")

router.get("/",getStudent.findAll)
router.post('/createStudent',validator,getStudent.create)
router.get("/:id",getStudent.findOne)
router.post("/authenticate",getStudent.auth)
router.delete("/delete/:id",getStudent.delete)
router.put("/update/:id",getStudent.update)
router.post("/student/uploadImage2",getStudent.uploadImage)
router.get("/student/uploadImage",getStudent.uploadImagePage)
router.use("/student/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJSDocs))


module.exports=router