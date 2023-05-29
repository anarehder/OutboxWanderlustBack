import joi from "joi"

export const hotelSchema = joi.object({
    name: joi.string().trim().required(),
    price: joi.string().trim().required(),
    cityID: joi.number().integer().required(),
    guests: joi.number().integer().required()
})

export const hotelPicturesSchema = joi.object({
    url: joi.string().uri().required(),
    hotelID: joi.number().integer().required()
})