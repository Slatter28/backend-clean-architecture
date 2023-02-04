const buildMakeUser =  require('./user');
const UserSchema = require('./user-schema');
const userValidator = require('../../../../shared/domain/validator/index')(UserSchema);
const makeUser = buildMakeUser(userValidator);
module.exports = makeUser;