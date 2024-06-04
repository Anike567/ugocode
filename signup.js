const User = require("./model/model.js");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");

dotenv.config();

const saltRounds = Number(process.env.SALT_ROUNDS);

async function signup(data) {
  const { username, password, name, email } = data;

  try {
    const user = await User.findOne({ username });

    if (user) {
      console.log("User already exists");
      return null;
    } else {
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      console.log(hashedPassword);

      const newUser = new User({
        name,
        username,
        email,
        password: hashedPassword
      });

      await newUser.save();
      return newUser;
    }
  } catch (error) {
    console.error("Error finding or saving user:", error);
    return false;
  }
}

module.exports = signup;
