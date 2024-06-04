const express = require("express");
const dotenv=require("dotenv");
const connection=require("./con.js");



dotenv.config();


connection.connect();


const port=process.env.PORT;

const app = express();

app.get("/",function(req,res){
    res.send("login successfulll");
});

app.listen(port,function(){
    console.log(port);
});