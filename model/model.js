

const userSchema=new mongoose.Schema({
    name:String,
    username:String,
    email:String,
    password:String
})
const User=mongoose.model(Users,userSchema);