const express=require("express")
const app=express()
const port=process.env.port|| 8000
require("./util/config")
const db = require("./model/index");

db.sequelize.sync({force:true})
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });


app.use(express.json())

const user=require("./routes/index")
app.use("/",user)


app.listen(port,()=>{
    
    console.log(`listening at port ${port}`)
})