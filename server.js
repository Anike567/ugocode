const express = require("express");
const dotenv=require("dotenv");
const connection=require("./con.js");
const signup=require("./signup.js");



dotenv.config();


connection.connect();


const port=process.env.PORT;

const app = express();
app.use(express.urlencoded({extended:true}));

app.get("/signup",function(req,res){
    let temp=signup({name:"Aniket",username:"itsaniket",email:"ka344057@gmail.com",password:"123"});
    console.log(temp);
});

app.listen(port,function(){
    console.log(port);
});