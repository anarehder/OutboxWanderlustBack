import { db } from "../database/database.connection.js";

export function getTicketsListDB(min, max) {
    if (min && max) {
        return db.query(`SELECT * FROM tickets WHERE price>$1 and price<$2;`, [min, max]);
    }
    return db.query(`SELECT * FROM tickets`);
}

export function getTicketsByCityDB(city, min, max) {
    //return db.query(`SELECT * FROM tickets WHERE "destinyID"=$1;`, [city]);
    if (min && max) {
        return db.query(`SELECT tickets.*, origin.name AS origin, destiny.name AS destiny,
                            airline.name AS airline, class.name AS class
                            FROM tickets
                            JOIN origin ON origin.id = tickets."originID"
                            JOIN destiny ON destiny.id = tickets."destinyID"
                            JOIN airline ON airline.id = tickets."airlineID"
                            JOIN class ON class.id = tickets."classID"
                            WHERE "destinyID"=$1 and tickets.price>$2 and tickets.price<$3;`, [city, min, max]);
    }
    return db.query(`SELECT tickets.*, origin.name AS origin, destiny.name AS destiny,
                        airline.name AS airline, class.name AS class
                        FROM tickets
                        JOIN origin ON origin.id = tickets."originID"
                        JOIN destiny ON destiny.id = tickets."destinyID"
                        JOIN airline ON airline.id = tickets."airlineID"
                        JOIN class ON class.id = tickets."classID"
                        WHERE "destinyID"=$1`, [city]);
}

export function getMinMaxTicketsDB(city) {
    return db.query(`SELECT MAX(price), MIN(price) FROM tickets WHERE "destinyID"= $1;`, [city]);
}

export function getTicketsByIdDB(id) {
    //return db.query(`SELECT * FROM tickets WHERE id=$1;`, [id]);
    return db.query(`SELECT tickets.*, origin.name AS origin, destiny.name AS destiny,
                        airline.name AS airline, class.name AS class
                        FROM tickets
                        JOIN origin ON origin.id = tickets."originID"
                        JOIN destiny ON destiny.id = tickets."destinyID"
                        JOIN airline ON airline.id = tickets."airlineID"
                        JOIN class ON class.id = tickets."classID"
                        WHERE tickets.id=$1`, [id]);
}


export function addNewTicketDB(originID, destinyID, airlineID, classID, price, depDate1, arrDate1, depDate2, arrDate2){
    return db.query(`INSERT INTO tickets ("originID","destinyID","airlineID","classID",price,"depDate1","arrDate1", "depDate2","arrDate2")
                    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);`, [originID, destinyID, airlineID, classID, price, depDate1, arrDate1, depDate2, arrDate2]);
}