const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

function setUser(user){
    const payload = {
        _id: user._id,
        email: user.email,
        name: user.name 
    };
    return jwt.sign(payload,JWT_SECRET);
}

function getUser(token){
    return jwt.verify(token, JWT_SECRET);
}

module.exports = {setUser,getUser}