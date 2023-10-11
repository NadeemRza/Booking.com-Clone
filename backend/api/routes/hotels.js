import express from "express";
import { countByCity, createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from "../controllers/hotel.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATE
router.put("/find/:id", verifyAdmin, updateHotel);

//DELETE
router.delete("/find/:id", verifyAdmin, deleteHotel);

//GET
router.get("/find/:id", getHotel);

//GET ALL
router.get("/", getAllHotel);

router.get("/countByCity", countByCity);
router.get("/countByType", getAllHotel);

export default router;