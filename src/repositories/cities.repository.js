import { db } from "../database/database.connection.js";

export function getCitiesListDB() {
    return db.query(`SELECT * FROM destiny;`);
}