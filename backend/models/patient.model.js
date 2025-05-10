import mongoose from 'mongoose';

const patientSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        unique : true,
    },

    dateOfBirth : {
        type : Date,
        required : true,
    },

    gender : {
        type : String,
        enum : ['Male' , 'Female' , 'Other'],
        required : true,
    },

    address : [{
        type : Object,
        required : true,
    }],
    
    emergencyContact : [{
        type : Object,
        required : true,
    }],

    bloodGroup : {
        type : String,
        required : true,
    },

    allergies : [{
        type : Object,
    }],

    medicalHistorySummary : {
        type : String,
    },

    currentMedications : [{
        type : Object,
    }],

    preferences : {
        type : Object,
    }
},
{
    timestamps : true
});

const PatientModel = mongoose.model('Patient' , patientSchema);
export default PatientModel;