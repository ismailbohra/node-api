const express=require("express")
const app=express()
const morgan=require("morgan")
const helmet=require("helmet")

const port=process.env.port|| 5000
require("./util/config")
const db = require("./model/index");

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.use(morgan('dev'))
app.use(express.json())
app.use(helmet())

const user=require("./routes/index")
app.use("/",user)


app.listen(port,()=>{
    
    console.log(`listening at port ${port}`)
})