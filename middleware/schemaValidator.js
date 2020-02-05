import joi from 'joi';

module.exports = {
  validateSchema: (schema, reqBody, next) => {
    return Joi.validate(reqBody, schema);

  }
}