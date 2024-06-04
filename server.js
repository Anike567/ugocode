const express = require("express");
const dotenv=require("dotenv");
const connection=require("./con.js");
const signup=require("./signup.js");
const login=require("./login.js")



dotenv.config();


connection.connect();


const port=process.env.PORT;

const app = express();
app.use(express.urlencoded({extended:true}));

app.post("/signup",function(req,res){
    let usercredential={
        name:req.body.name,
        username:req.body.username,
        email:req.body.email,
        password:req.body.email}
    signup(usercredential);
});

app.post("/login",function(req,res){
    let login_credential={
        username:req.body.username,
        password:req.body.password
    }

    login(data);
})


app.listen(port,function(){
    console.log(port);
});