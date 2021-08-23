const mongoose = require ('mongoose');
const dotenv = require("dotenv").config();

// const connectDB = async () =>{
//   try{
// const DB_URL = process.env.DB_URL
// mongoose.connect(DB_URL,
//           { 
//             useNewUrlParser: true, 
//             useUnifiedTopology: true 
//           });
// console.log('MongoDB is Connected...');
//       }catch (err){
//           console.error(err.message);
//           process.exit(1);
//       };
//   };
//   module.exports = connectDB;

async function connectDB() {
  const DB_URL = process.env.DB_URL
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
console.log("Mongo has connected successfully");
const db = mongoose.connection;
db.on("error", (error) => {
      console.log("Mongo connection has an error", error);
      mongoose.disconnect();
  });
  db.on("disconnected", () => {
      console.log("Mongo connection is disconnected");
  });
};

module.exports = connectDB;
