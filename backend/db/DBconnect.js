const mongoose = require('mongoose');

exports.connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_LINK)
        console.log("MongoDb connected")
    } catch (error) {
        console.log("Error Connecting to MongoDB", error.message)
    }
}
