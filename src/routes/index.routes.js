import { Router } from "express";
import citiesRoutes from "./cities.routes.js";

const router = Router()

router.use(citiesRoutes);

export default router;