const Joi = require('@hapi/joi');

const UserSchema = Joi.object({
    id: Joi.number().integer().required(),
    name: Joi.string().min(3).max(30).required().messages({
        'string.min': 'name must be at least 3 characters long',
        'string.max': 'name must be at most 30 characters long',
        'string.empty': 'name cannot be an empty field',
        'any.required': 'name is required'
    }),
    email: Joi.string().email().required().messages({
        'string.email': 'email must be a valid email',
        'string.empty': 'email cannot be an empty field',
        'any.required': 'email is required'
    }),
    password: Joi.string().regex(/^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,30}$/).min(6).max(30).required().messages({
            'string.min': 'password must be at least 6 characters long',
            'string.max': 'password must be at most 30 characters long',
            'string.empty': 'password cannot be an empty field',
            'any.required': 'password is required',
            'string.pattern': 'password must contain at least one uppercase letter, one lowercase letter, one number and one special character',
    }),
    is_active: Joi.boolean().required().messages({
        'boolean.base': 'is_active must be a boolean',
        'any.required': 'is_active is required'
    }),
    google: Joi.boolean().required()   
});



module.exports = UserSchema;