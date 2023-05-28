import { getHotelsByCityDB, getHotelsByIdDB, getHotelsListDB } from "../repositories/hotels.repository.js";

export async function getHotelsList(req,res){
    try{
        const { rows: hotels } = await getHotelsListDB();
        res.send(hotels);
    } catch (err) {
        res.stats(500).send(err.message);
    }
}

export async function getHotelsByCity(req, res) {
    const { city } = req.params;
    try {
        const { rows: hotels } = await getHotelsByCityDB(city);
        res.send(hotels);
    } catch (err) {
        res.stats(500).send(err.message);
    }
}

export async function getHotelsById(req, res) {
    const { id } = req.params;
    try {
        const { rows: hotels } = await getHotelsByIdDB(id);
        res.send(hotels);
    } catch (err) {
        res.stats(500).send(err.message);
    }
}