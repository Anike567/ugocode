const bcrypt = require("bcrypt");
const User = require("./model/model");
const dotenv = require("dotenv");

dotenv.config();

async function login(data) {
  const { username, password } = data;

  try {
    const user = await User.findOne({ username });

    if (user) {
      const match = await bcrypt.compare(password, user.password);
      return match ? user : false;
    } else {
      console.log("User not found, try signing up.");
      return false;
    }
  } catch (error) {
    console.error("Error finding user:", error);
    return false;
  }
}

module.exports = login;
