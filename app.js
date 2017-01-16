const express = require("express");

const app = express();

app.get("/",function(req,res,next){
  res.send("Welcome!!")
})

app.get("/news",function(req,res,next){
  res.send("This is the news page.")
})

app.listen(3000, function(){
  console.log("Server listening")
})
