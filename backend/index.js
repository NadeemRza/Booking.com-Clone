import express from "express";
const app = express()
const port = 5000;

import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

import cookieParser from "cookie-parser";

import authRoute from "./api/routes/auth.js";
import usersRoute from "./api/routes/users.js";
import hotelsRoute from "./api/routes/hotels.js";
import roomsRoute from "./api/routes/rooms.js";

const connectMongodb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connected to DB");
    } catch (error) {
        console.log(error)
    }
}

mongoose.connection.on("disconnected", ()=>{
    console.log("DB Disconnected");
})

mongoose.connection.on("connected", ()=>{
    console.log("DB Connected");
})

//middlewares
app.use(cookieParser())
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

//error handling
app.use((err, req,res,next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong.";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
    connectMongodb();
    console.log(`Example app listening on port ${port}`)
})