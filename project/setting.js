const mongoose = require('mongoose');
const connect = mongoose.connect("mongodb://localhost:27017/nama_database");

mongoose.connect('mongodb://localhost:27017/nama_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// Check database connected or not
connect.then(() => {
    console.log("Database Connected Successfully");
})
.catch(() => {
    console.log("Database cannot be Connected");
})

// Create Schema
const Loginprototype = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
});


const dbset = new mongoose.model("transjakarta", Loginprototype);

module.exports = dbset;