import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

if(!process.env.MONGO_URI)
{
    throw new Error(
        "Please provide MONGO_URI in the .env file"
    )
}

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MOngoDB');
    }
    catch(err)
    {
        console.log('Could not connect to MongoDB' + err);
        process.exit(1);
    }
}

export default connectDB;