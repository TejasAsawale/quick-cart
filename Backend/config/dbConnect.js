const mongoose = require("mongoose");
require('dotenv').config();

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("database started successfully");
        
    } catch (error) {
        console.log("database error");
        process.exit(1);
    }
};

module.exports = dbConnect;