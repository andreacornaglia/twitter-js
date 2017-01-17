const express = require("express");
const nunjucks = require("nunjucks");

const app = express();

//connecting express w/nunjuncks
app.set("view engine", "html");
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true }); //cache off during development

app.use("/special/",function(req,res,next){
  console.log("This is a special place.");
  next();
})

app.use(function(req,res,next){
  console.log("Request: ",req.method,req.path);
  next();
})

app.get("/",function(req,res,next){
  //res.send("Welcome!!");
  const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
  res.render( 'index', {title: 'Hall of Fame', people: people} );
})

app.get("/news",function(req,res,next){
  res.send("This is the news page.")
})

app.listen(3000, function(){
  console.log("Server listening")
})

//nunjuncks code goes here
/*
var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};

nunjucks.render('index.html', locals, function(err, output) {
  console.log(output);
});
*/