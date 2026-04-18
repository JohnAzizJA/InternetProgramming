const mongoose = require('mongoose');

const uri = "mongodb+srv://johnnazizz:Janjon101103@iplab8.ruxclt1.mongodb.net/?appName=iplab8";

const dbConnect = async () => {
    try{
        await mongoose.connect(uri)
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

module.exports = dbConnect;