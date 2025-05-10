import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    firstName : {
        type : String,
        required : true,
    },

    lastName : {
        type : String,
        required : true,
    },

    email: {
        type: String,
        required : true,
        unique : true,
    },

    password:{
        type : String,
        required : true,
    },

    type : {
        type : String,
        enum : ['Patient' , 'Doctor'],
        required : true,
    },

    isVerified : {
        type : Boolean,
        default : false,
    }
},
{
    timestamps : true,
});

const UserModel = mongoose.model('User' , UserSchema);
export default UserModel;