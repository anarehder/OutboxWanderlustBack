import { Router } from "express";
import { addNewTicket, getTicketsByCity, getTicketsById, getTicketsList } from "../controllers/tickets.controllers.js";
import validateSchema from "../middlewares/validateSchema.js";
import { ticketSchema } from "../schemas/ticket.schema.js";

const ticketsRoutes = Router();

ticketsRoutes.get("/tickets", getTicketsList);
ticketsRoutes.post("/tickets/addNewTicket", validateSchema(ticketSchema), addNewTicket);
ticketsRoutes.get("/tickets/city/:city", getTicketsByCity);
ticketsRoutes.get("/tickets/id/:id", getTicketsById);

export default ticketsRoutes;