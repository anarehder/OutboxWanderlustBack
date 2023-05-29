import { db } from "../database/database.connection.js";

export function getTicketsListDB(limit) {
    if (limit) {
        return db.query(`SELECT * FROM tickets WHERE price<$1;`, [limit]);
    }
    return db.query(`SELECT * FROM tickets`);
}

export function getTicketsByCityDB(city) {
    //return db.query(`SELECT * FROM tickets WHERE "destinyID"=$1;`, [city]);
    return db.query(`SELECT tickets.*, origin.name AS origin, destiny.name AS destiny,
                        airline.name AS airline, class.name AS class
                        FROM tickets
                        JOIN origin ON origin.id = tickets."originID"
                        JOIN destiny ON destiny.id = tickets."destinyID"
                        JOIN airline ON airline.id = tickets."airlineID"
                        JOIN class ON class.id = tickets."classID"
                        WHERE "destinyID"=$1;`, [city]);
}

export function getMinMaxTicketsDB(city){
    return db.query(`SELECT MAX(price), MIN(price) FROM tickets WHERE "destinyID"= $1;`, [city]);
}

export function getTicketsByIdDB(id) {
    return db.query(`SELECT * FROM tickets WHERE id=$1;`, [id]);
}