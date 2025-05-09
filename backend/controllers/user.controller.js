import dotenv from 'dotenv';
dotenv.config();
import bcryptjs from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import Patient from '../models/patient.model.js';
import Doctor from '../models/doctor.model.js';

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
            // Validate required fields for Patient
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
        } else if (type === 'Doctor') {
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
    } catch (error) {
        res.status(500).json({
            message: error.message || 'An error occurred during registration.',
            error: true,
            success: false,
        });
    }
};

export default registerUser;
