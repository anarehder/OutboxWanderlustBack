import { Router } from "express";
import { getCitiesList } from "../controllers/cities.controllers.js";

const citiesRoutes = Router();

citiesRoutes.get("/cities", getCitiesList);

export default citiesRoutes;