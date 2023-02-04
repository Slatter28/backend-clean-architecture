const User = require('../../domain/db/user');
const makeUser = require('../../domain/models/index');
const serialize = require('./serializer');

let listUser = () => {
    return User.findAll()
        .then(serialize)
        .catch((err) => {
        throw new Error(err.message);
        });
    }

let findUser = (id) => {
    return User.findByPk(id)
        .then(serialize)
        .catch((err) => {
        throw new Error(err.message);
        });
    }

let createUser = (userInfo) => {
    let user = makeUser(userInfo);
    let newUser={
        name: user.getName(),
        email: user.getEmail(),
        password: user.getPassword(),
        is_active: user.getIsActive(),
        google: user.getGoogle()
    }
    return User.create(newUser)
        .then(serialize)
        .catch((err) => {
        throw new Error(err.message);
        });
    }


module.exports = {
    listUser,
    findUser,
    createUser
}