import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true })

export default mongoose.model( "User", userSchema);