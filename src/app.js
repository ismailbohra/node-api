const express=require("express")
const app=express()
const morgan=require("morgan")
const helmet=require("helmet")
const jwt=require("jsonwebtoken")

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

app.post("/api/login",(req,res)=>{
  const user={
    id: 1,
    username:"ismail",
    email:"ismail@gmail.com"
  }

  jwt.sign({user}, 'secretkey', (err, token) => {
    res.json({
      token
    });
  });
})
app.post('/api/posts', verifyToken, (req, res) => {  
  jwt.verify(req.token, 'secretkey', (err, authData) => {
    if(err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: 'Post created...',
        authData
      });
    }
  });
});
function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];
  if(typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }

}
