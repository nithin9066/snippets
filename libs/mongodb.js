import mongoose from "mongoose";

async function connectMongoDb() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to DB');
    } catch (error) {
        console.log(error);
    }
}

export default connectMongoDb;