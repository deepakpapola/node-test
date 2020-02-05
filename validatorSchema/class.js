import Joi from 'joi';
const schema = Joi.object().keys({
    title: Joi.string().min(4).max(80).required(),
    description: Joi.string().min(15).max(600),
    maxNumberOfStudents: Joi.number().integer().min(1).max(50).required(),
    start: Joi.date().iso().required(),
    end: Joi.date().iso().required(),
    type: Joi.string().valid('YOGA', 'YOGA', 'CARDIO')
});