import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";

export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    next(error);
  }
};

export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    next(error);
  }
};

export const deleteHotel = async (req, res, next) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been deleted.");
    } catch (error) {
        next(error)
    }
};

export const getHotel = async (req, res, next) => {
    try {
        const getHotel = await Hotel.findById(req.params.id);
        if(getHotel === null) return next(createError(404, "Hotel doesnot exist"))
        res.status(200).json(getHotel)
    } catch (error) {
        next(error)
    }
};

export const getAllHotel = async (req, res, next) => {
    try {
        const allHotels = await Hotel.find();
        res.status(200).json(allHotels)
    } catch (error) {
        next(error)
    }
};