import { getTicketsByCityDB, getTicketsByIdDB, getTicketsListDB } from "../repositories/tickets.repository.js";

export async function getTicketsList(req,res){
    const limit = req.query.limit;
    console.log(limit)
    try{
        const { rows: tickets } = await getTicketsListDB(limit);
        res.send(tickets);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function getTicketsByCity(req, res) {
    const { city } = req.params;
    try {
        const { rows: tickets } = await getTicketsByCityDB(city);
        res.send(tickets);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function getTicketsById(req, res) {
    const { id } = req.params;
    try {
        const { rows: tickets } = await getTicketsByIdDB(id);
        res.send(tickets);
    } catch (err) {
        res.status(500).send(err.message);
    }
}