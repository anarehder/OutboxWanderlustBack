import { Router } from "express";
import citiesRoutes from "./cities.routes.js";
import hotelsRoutes from "./hotels.routes.js";

const router = Router()

router.use(citiesRoutes);
router.use(hotelsRoutes);

export default router;