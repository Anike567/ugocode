
const mongoose = require("mongoose");
function connect(options = {}) {  
    return mongoose.connect(process.env.database_connection_url, options)
      .then(() => console.log("Successfully connected to MongoDB"))  
      .catch((err) => {
        console.error("Error connecting to MongoDB:", err);  
      
      });
  }
  
  exports.connect = connect;
  