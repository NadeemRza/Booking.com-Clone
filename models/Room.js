import mongoose from "mongoose";
const { Schema } = mongoose;

const roomSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    maxPeople: {
        type: Number,
        required: true,
    },
    desc: {
        type: String,
        required: true,
        minLength: 10
    },
    roomNumbers: [{number: Number, unavailableDates: {type: [Date]}}]
}, { timestamps: true })

export default mongoose.model( "Room", roomSchema);