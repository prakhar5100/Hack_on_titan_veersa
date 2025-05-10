import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        unique : true,
    },

    medicalLicenseNumber : {
        type : String,
        unique : true,
    },

    specializations : [{
        type  :String,
        required : true,
    }],

    qualifications : [{
        type : Object,
    }],

    yearsOfExperience : {
        type : Number,
        required  : true,
    },

    clinicName : {
        type : String,
    },

    clinicAddress : {
        type  :Object,
    },

    consultationFee : {
        type : Number,
        required  : true,
    },

    availabilitySchedule  : [{
        type : Object,
    }],

    isVerified : {
        type : Boolean,
        default : false,
    },

    bio : {
        type : String,
    },

    languageSpoken : [{
        type : String,
    }],
},
{
    timestamps : true
});

const DoctorModel = mongoose.model('Doctor' , doctorSchema);
export default DoctiorModel;