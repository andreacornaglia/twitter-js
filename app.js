const express = require("express");

const app = express();

app.use("/special/",function(req,res,next){
  console.log("This is a special place.");
  next();
})

app.use(function(req,res,next){
  console.log("Request: ",req.method,req.path);
  next();
})

app.get("/",function(req,res,next){
  res.send("Welcome!!")
})

app.get("/news",function(req,res,next){
  res.send("This is the news page.")
})

app.listen(3000, function(){
  console.log("Server listening")
})
