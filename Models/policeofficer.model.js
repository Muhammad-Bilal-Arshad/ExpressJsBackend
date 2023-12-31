import mongoose, { Schema } from "mongoose";
const schema = mongoose.Schema;

const OfficerSchema = new Schema({
    name:{
        type: String,
        required: true,
        minlength: 5
    },
    phone:{
        type: Number,
        match: /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/,
        required: true,
    },
    email:{
        type: String,
        match: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        required: true,

    },
    password:{
        type: String,
        required: true,
    },
    policeStation: {
        type: Schema.Types.ObjectId,
        ref: 'PoliceStation'
    }
});


const PoliceOfficer = mongoose.model('Officer',OfficerSchema);
export { PoliceOfficer};

