import { getHotelAmenitiesDB, getHotelPicturesDB, getHotelsByCityDB, getHotelsByIdDB, getHotelsListDB, getMinMaxHotelsDB } from "../repositories/hotels.repository.js";

export async function getHotelsList(req,res){
    try{
        const { rows: hotels } = await getHotelsListDB();
        res.send(hotels);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function getHotelsByCity(req, res) {
    const { city } = req.params;
    const min = req.query.min;
    const max = req.query.max;
    try {
        const { rows: hotels } = await getHotelsByCityDB(city, min, max);
        const { rows: prices } = await getMinMaxHotelsDB(city);
        const resposnse = [hotels, prices];
        res.send(resposnse);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function getHotelsById(req, res) {
    const { id } = req.params;
    try {
        const { rows: hotels } = await getHotelsByIdDB(id);
        const { rows: amenities } = await getHotelAmenitiesDB(id);
        const { rows: images } = await getHotelPicturesDB(id);
        const response = [hotels, amenities, images];
        res.send(response);
    } catch (err) {
        res.status(500).send(err.message);
    }
}