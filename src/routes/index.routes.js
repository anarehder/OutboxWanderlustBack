import { Router } from "express";
import citiesRoutes from "./cities.routes.js";
import hotelsRoutes from "./hotels.routes.js";
import ticketsRoutes from "./tickets.routes.js";

const router = Router()

router.use(citiesRoutes);
router.use(hotelsRoutes);
router.use(ticketsRoutes);

export default router;