import { db } from "../database/database.connection.js";

export function getHotelsListDB() {
    return db.query(`SELECT * FROM hotels;`);
}

export function getHotelsByCityDB(city) {
    //return db.query(`SELECT * FROM hotels WHERE "cityID"=$1;`, [city]);
    return db.query (`SELECT hotels.*, destiny.name AS destiny
                        FROM hotels
                        JOIN destiny ON destiny.id = hotels."cityID"
                        WHERE "cityID"=$1;`, [city]);
}

export function getHotelsByIdDB(id) {
    return db.query(`SELECT * FROM hotels WHERE id=$1;`, [id]);
}