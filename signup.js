const User = require("./model/model.js");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");

dotenv.config();

const saltRounds = Number(process.env.saltRounds);



function signup(data) {
  const { username, password, name, email } = data;

  User.findOne({ username })
    .then(user => {
      if (user) {
        console.log("This username already exists. Try another.");
      } else {
        return bcrypt.hash(password, saltRounds);
      }
    })
    .then(hash => {
      if (hash) {
        const newUser = new User({
          name,
          username,
          email,
          password: hash
        });
        return newUser.save();
      }
    })
    .then(() => {
      console.log("User created successfully!");
    })
    .catch(error => {
      console.error("Error during signup process:", error);
    });
}




module.exports = signup;

