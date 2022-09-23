const express=require("express")
const router=express.Router()
const fs=require("fs")
const path=require("path")
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerJSDocs = YAML.load(path.join(__dirname,"../util/yaml/studentapi.yaml"));
// var options = {
//     swaggerOptions: {
//       authAction :{ JWT: {name: "JWT", schema: {type: "apiKey", in: "header", name: "Authorization", description: ""}, value: "Bearer <JWT>"} }
//     }
//   };

const controller=require("../controller/index")

const getStudent=controller.student_controller
const validator=require("../validation/student.validation")
const verifyToken=require("../util/jwtVerification/tokenVerificaton")

router.get("/",verifyToken,getStudent.findAll)
router.post('/createStudent',validator,getStudent.create)
router.get("/:id",verifyToken,getStudent.findOne)
router.post("/authenticate",getStudent.auth)
router.delete("/delete/:id",verifyToken,getStudent.delete)
router.put("/update/:id",verifyToken,getStudent.update)
router.post("/student/uploadImage2",getStudent.uploadImage)
router.get("/student/uploadImage",getStudent.uploadImagePage)
router.use("/student/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJSDocs))


module.exports=router