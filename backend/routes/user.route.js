import express from 'express';
import userController from '../controllers/user.controller.js';
const { registerUser, LoginUser , verifyEmail } = userController;

const router = express.Router();

router.post('/register' , registerUser);
router.post('/Login' , LoginUser);
router.get('/verify-email/:token' , verifyEmail);


export default router;