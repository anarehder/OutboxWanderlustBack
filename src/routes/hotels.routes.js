import { Router } from "express";
import { getHotelsByCity, getHotelsById, getHotelsList } from "../controllers/hotels.controllers.js";

const hotelsRoutes = Router();

hotelsRoutes.get("/hotels", getHotelsList);
hotelsRoutes.get("/hotels/city/:city", getHotelsByCity);
hotelsRoutes.get("/hotels/id/:id", getHotelsById);

export default hotelsRoutes;