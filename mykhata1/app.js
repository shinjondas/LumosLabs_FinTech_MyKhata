//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let expenditure;

app.get("/", function(req, res){
  res.render("about");
});

app.get("/index", function(req, res){
    res.render("index");
  });

app.get("/login", function(req, res){
  res.render("login");
});

app.post("/login",function(req,res){
    res.redirect("/index");
});
  
app.get("/signup", function(req, res){
    res.render("signup");
  });

app.post("/signup",function(req,res){
    res.redirect("/index");
});
  
app.get("/summary", function(req, res){
    res.render("summary", {expenditure:expenditure});
  });

app.post("/",function(req,res){
       var expenses=req.body.expense;
       var ArrayOfExpenses = expenses.map(Number);
       expenditure=ArrayOfExpenses.reduce(function(acc, val) { return acc + val; }, 0);

       res.redirect("/summary");
    
});


app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});
