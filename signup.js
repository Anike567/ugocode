const model=require("./model/model.js");

function signup(data){
    const user=new User({
        name:data.name,
        username:data.username,
        email:data.email,
        password:data.password    
    });
    user.save()
    .then(()=>{
        console.log("user logged in successfully");
    })

    .catch((err)=>{
        console.log(err);
    })
    
}

