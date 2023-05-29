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

export function getMinMaxHotelsDB(city){
    return db.query(`SELECT MAX(price), MIN(price) FROM hotels WHERE "cityID"= $1;`, [city]);
}

export function getHotelsByIdDB(id) {
    return db.query(`SELECT hotels.*, destiny.name AS destiny
                        FROM hotels
                        JOIN destiny ON destiny.id = hotels."cityID"
                        WHERE hotels.id=$1;`, [id]);
}

export function getHotelAmenitiesDB(id) {
    return db.query(`SELECT hotels.name, amenities.name AS amenities
                    FROM hotels
                    JOIN hotelamenities ON hotelamenities."hotelID" = hotels.id
                    JOIN amenities ON hotelamenities."amenitiesID" = amenities.id
                    WHERE hotels.id = $1;`, [id]);
}