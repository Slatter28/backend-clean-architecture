const usersDb= require('../../application/data-acces/index');

const  listUser = (req, res, next) => {
    usersDb.listUser()
        .then((users) => {
            res.json(users);
        })
        .catch(next);
}

const  findUser = (req, res, next) => {
    usersDb.findUser(req.params.id)
        .then((user) => {
            res.json(user);
        })
        .catch(next);
}

const  createUser = (req, res, next) => {
    usersDb.createUser(req.body)
        .then((user) => {
            res.json(user);
        })
        .catch(next);
}


module.exports = {
    listUser,
    findUser,
    createUser
}