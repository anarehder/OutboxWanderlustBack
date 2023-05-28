import { Router } from "express";
import { getTicketsByCity, getTicketsById, getTicketsList } from "../controllers/tickets.controllers.js";

const ticketsRoutes = Router();

ticketsRoutes.get("/tickets", getTicketsList);
ticketsRoutes.get("/tickets/city/:city", getTicketsByCity);
ticketsRoutes.get("/tickets/id/:id", getTicketsById);

export default ticketsRoutes;