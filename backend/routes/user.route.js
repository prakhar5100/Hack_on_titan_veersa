import express from 'express';
import userController from '../controllers/user.controller.js';
const { registerUser, LoginUser } = userController;

const router = express.Router();

router.post('/register' , registerUser);
router.post('/Login' , LoginUser);
export default router;