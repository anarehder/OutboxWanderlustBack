import { getCitiesListDB } from "../repositories/cities.repository.js";

export async function getCitiesList(req,res){
    try{
        const { rows: cities } = await getCitiesListDB();
        res.send(cities);
    } catch (err) {
        res.stats(500).send(err.message);
    }
}