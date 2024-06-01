const express = require('express');
const connectDB = require('./db/config');
const User = require('./models/User')
const Contact = require('./models/Contact')
const cors =require('cors')

const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 5000;

connectDB();

const app=express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

 app.use("/contact", async (req,res)=>{
  const data = new Contact(req.body);
  console.log(req.body)
  const result = await data.save();
  res.send(result);
 })

 app.post("/register", async (req, res) => {
  const data = new User(req.body)
  console.log(req.body);
  let result = await data.save();
  res.send(result);
  });
  
  app.post("/login", async (req, res) => {
    if (req.body.email && req.body.password) {
      const data = await User.findOne(req.body)  //.select("-password");
      if (data) res.send(data);
      else {
        res.send({ result: "not found" });
      }
    } else {
      res.send({ result: "not found" });
    }
  });
app.listen(5000, () => {
    console.log("Server is running at port 5000");
})