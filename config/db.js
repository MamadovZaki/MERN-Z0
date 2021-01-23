const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    ///*MONGO_URI is the connection link that we copied from mongo cloud
    //*Code is to establish a connection with the database using promises
    const connecx = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log(`mongodb connected: ${connecx.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
