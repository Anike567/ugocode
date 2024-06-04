const model=require("./model/model");

function signup(data){
    const newUser = new User({
        name: "John Doe",
        username: "johndoe",
        email: "johndoe@example.com",
        password: "securePassword" // (Remember to use secure password hashing!)
      });
      
      newUser.save()
        .then(() => console.log("User created successfully!"))
        .catch((error) => console.error("Error creating user:", error));
      
    
}

module.exports=signup;