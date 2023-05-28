import { db } from "../database/database.connection.js";

export function getTicketsListDB(limit) {
    if  (limit) {
    return db.query(`SELECT * FROM tickets WHERE price<$1;`, [limit]);
    }
    return db.query(`SELECT * FROM tickets`);
}

export function getTicketsByCityDB(city) {
    return db.query(`SELECT * FROM tickets WHERE "destinyID"=$1;`, [city]);
}

export function getTicketsByIdDB(id) {
    return db.query(`SELECT * FROM tickets WHERE id=$1;`, [id]);
}