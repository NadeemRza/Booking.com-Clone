import { query } from "express";
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
    next(error);
  }
};

export const getHotel = async (req, res, next) => {
  try {
    const getHotel = await Hotel.findById(req.params.id);
    if (getHotel === null) return next(createError(404, "Hotel doesnot exist"));
    res.status(200).json(getHotel);
  } catch (error) {
    next(error);
  }
};

export const getAllHotel = async (req, res, next) => {
  try {
    let allHotels = [];
    const {min, max, limit, featured, ...others} = req.query;
    let query = {...others};
    if(featured !== undefined){
      query = { featured: featured, ...others }
    }
    if(min !== undefined){
      query = { ...query, 'cheapestPrice': { ...query.cheapestPrice, $gte: min } };
    }
    if(max !== undefined){
      query = { ...query, 'cheapestPrice': { ...query.cheapestPrice, $lte: max } };
    }
    if(limit !== undefined){
      allHotels = await Hotel.find(query).limit(limit);
    } else {
      allHotels = await Hotel.find(query);
    }
    res.status(200).json(allHotels);
  } catch (error) {
    next(error);
  }
};

export const countByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const cityList = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    const allHotels = await Hotel.find();
    res.status(200).json(cityList);
  } catch (error) {
    next(error);
  }
};

export const countByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotel.countDocuments({ type: "hotel" });
    const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
    const resortCount = await Hotel.countDocuments({ type: "resort" });
    const villaCount = await Hotel.countDocuments({ type: "villa" });
    const cabinCount = await Hotel.countDocuments({ type: "cabin" });
    
    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "apartment", count: apartmentCount },
      { type: "resort", count: resortCount },
      { type: "villa", count: villaCount },
      { type: "cabin", count: cabinCount }
    ]);
  } catch (error) {
    next(error);
  }
};
