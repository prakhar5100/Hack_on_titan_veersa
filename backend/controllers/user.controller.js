import dotenv from 'dotenv';
dotenv.config();
import bcryptjs from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import Patient from '../models/patient.model.js';
import Doctor from '../models/doctor.model.js';


// Generating JWT Token
const generateToken = (userId) => {
    return jwt.sign({ userId } , process.env.JWT_SECRET, {expiresIn : '1h'});
};

// Register

const registerUser = async (req, res) => {
    try {
        const { firstName, lastName, email, password, type, bloodGroup, gender, dateOfBirth } = req.body; // Extract all required fields

        // Check if the user already exists
        const existUser = await User.findOne({ email });
        if (existUser) {
            return res.status(400).json({ message: 'User Already exists' });
        }

        // Hash Password
        const salt = await bcryptjs.genSalt(10);
        const hashPassword = await bcryptjs.hash(password, salt);

        const payload = {
            firstName,
            lastName,
            email,
            password: hashPassword,
            type,
        };

        const newUser = new User(payload);
        const save = await newUser.save();

        if (type === 'Patient') {
            if (!bloodGroup || !gender || !dateOfBirth) {
                return res.status(400).json({
                    message: 'Please provide bloodGroup, gender, and dateOfBirth for a Patient.',
                    error: true,
                    success: false,
                });
            }

            // Create Patient
            const patient = new Patient({
                userId: newUser._id,
                bloodGroup,
                gender,
                dateOfBirth,
            });
            await patient.save();
        } 
        
        else if (type === 'Doctor') {
            // Create Doctor
            const doctor = new Doctor({
                userId: newUser._id,
            });
            await doctor.save();
        }

        res.status(201).json({
            message: 'User registered successfully. Please verify your email.',
            error: false,
            success: true,
        });
    } 
    
    catch (error) {
        res.status(500).json({
            message: error.message || 'An error occurred during registration.',
            error: true,
            success: false,
        });
    }
};



// User Login
const LoginUser = async(req ,res) => {
    const { email , password } = req.body;
    try{
        const user = await User.findOne({ email });
        // Check if user exists
        if(!user)
        {
            return res.status(400).json({
                message : 'Invalid Credentials',
                error : true,
                success : false
            });
        }

        if(!user.isVerified)
        {
            return res.status(400).json({
                message : 'Please verify your email before login',
                error : true,
                success : false
            });
        }

        // Check Password
        const isMatch = await bcryptjs.compare(password , user.password);
        if(!isMatch)
        {
            return res.status(400).json({
                message : 'Invalid Credentials',
                error : true,
                success : false
            });
        }
    }
    catch(error)
    {
        res.status(500).json({
            message : error.message || 'An error occured during Login',
            error : true,
            success : false
        });
    }
}

export default {registerUser , LoginUser};
