import { getMinMaxTicketsDB, getTicketsByCityDB, getTicketsByIdDB, getTicketsListDB } from "../repositories/tickets.repository.js";

export async function getTicketsList(req,res){
    const min = req.query.min;
    const max = req.query.max;
    console.log(min, max)
    try{
        const { rows: tickets } = await getTicketsListDB(min,max);
        res.send(tickets);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function getTicketsByCity(req, res) {
    const { city } = req.params;
    const min = req.query.min;
    const max = req.query.max;
    try {
        const { rows: tickets } = await getTicketsByCityDB(city, min, max);
        const { rows: prices } = await getMinMaxTicketsDB(city);
        const resposnse = [tickets, prices];
        res.send(resposnse);
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