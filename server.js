const express = require("express");
const dotenv = require("dotenv");
const connection = require("./con.js");
const {setUser} = require('./auth.js');
const signup = require("./signup.js");
const login = require("./login.js");

dotenv.config();

connection.connect();

const port = process.env.PORT || 3000; 

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/signup", async (req, res) => {
  const usercredential = {
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password 
  };

  try {
    const user = await signup(usercredential);
    if (user === null) {
      res.status(409).json({"error": "This username is already exise use another"});
    } else if (user === false) {
      res.status(500).send("Internal error occurred");
    } else {
      console.log(user);
      res.status(201).json({"message": "Data sucessfully inserted"});
    }
  } catch (error) {
    res.status(500).json({"error": "Internal Server Error"});
  }
});

app.post("/login", async (req, res) => {
  const login_credential = {
    username: req.body.username,
    password: req.body.password
  };

  try {
    const user = await login(login_credential);
    if (user) {
      const token = setUser(user);
      res.status(200).json({ "message": "Login Successful", token: token });
    } else {
      res.status(401).json({ "error": "Invalid username or password" });
    }
  } catch (error) {
    res.status(500).json({ "error": "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
