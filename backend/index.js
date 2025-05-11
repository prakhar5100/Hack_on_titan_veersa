import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import connectDB from './config/connectdb.js';
import userRoutes from './routes/user.route.js';

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/users' , userRoutes);

const PORT = process.env.PORT || 3000;

connectDB().then(()=>{
    app.listen(PORT, () => {
        console.log(`Server is running on the port : http://localhost:${PORT}`);
    })
})

