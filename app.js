var express = require("express");
var app = express();
var faker = require('faker');

app.use(express.static("css"));

app.set("view engine", "ejs");
app.use(express.static("public")); //folder for images, css, js


//routes
app.get("/", function(req, res){
    res.render('index');
}); //root route


app.get("/works", function(req, res){
    res.render('works');
    
    
});//works route

app.get("/benefits", function(req, res){
    res.render('benefits');
    
    
});//benefits route

app.get("/examples", function(req, res){
    res.render('examples');
    
    
});//examples route

// This app.get function is using faker library to print fake details about author.
app.get("/fake", function(req, res) {
    
    res.render('fake', {faker : faker});
});// fake route

//starting server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Express server is running...");
});