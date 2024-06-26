import mongoose from "mongoose";

const userSchema = new mongoose.Schema ({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    Password:{
        type: String,
        required: true, 
    },
},{timestamp : true});

const User = mongoose.model('User',userSchema);

export default User;