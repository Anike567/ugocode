const bcrypt = require("bcrypt");
const User = require("./model/model.js");
const dotenv = require("dotenv");

dotenv.config();

const saltRounds = Number(process.env.SALT_ROUNDS); 

function login(data) {
    const { username, password } = data;

    User.findOne({ username })
        .then(user => {
            if (!user) {
                console.log("User not found");
                return;
            }


            return bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        console.log("Successfully logged in");
                    } else {
                        console.log("Invalid password");
                    }
                });
        })
        .catch(err => {
            console.log("Error finding user:", err);
        });
}

module.exports = login;
