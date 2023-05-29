import { Router } from "express";
import { addHotelPictures, addNewHotel, getHotelsByCity, getHotelsById, getHotelsList } from "../controllers/hotels.controllers.js";
import validateSchema from "../middlewares/validateSchema.js";
import { hotelPicturesSchema, hotelSchema } from "../schemas/hotel.schema.js";

const hotelsRoutes = Router();

hotelsRoutes.get("/hotels", getHotelsList);
hotelsRoutes.post("/hotels/addNewHotel", validateSchema(hotelSchema), addNewHotel);
hotelsRoutes.post("/hotels/addPictures", validateSchema(hotelPicturesSchema), addHotelPictures);
hotelsRoutes.get("/hotels/city/:city", getHotelsByCity);
hotelsRoutes.get("/hotels/id/:id", getHotelsById);

export default hotelsRoutes;