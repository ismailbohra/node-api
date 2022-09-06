const express=require("express")
const connection = require("./config")
const app=express()
const port=process.env.port|| 8000
const create=require("./routes/route")


require("./config/index")

app.use(express.json())

const studenCreate=require("./routes/route")
app.use("/student",studenCreate)


app.listen(port,()=>{
    
    console.log(`listening at port ${port}`)
})