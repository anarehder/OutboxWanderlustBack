import joi from "joi"

export const ticketSchema = joi.object({
    originID:joi.number().integer().required(),
    destinyID: joi.number().integer().required(),
    airlineID: joi.number().integer().required(),
    classID: joi.number().integer().required(),
    price: joi.number().required(),
    depDate1: joi.date().required(),
    arrDate1: joi.date().required(),
    depDate2: joi.date().required(),
    arrDate2: joi.date().required()
})
