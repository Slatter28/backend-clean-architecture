
const { Sequelize } = require('sequelize')

const db = new Sequelize({
    dialect: 'postgres',
    host: "dpg-cf7baokgqg47vk2f2o0g-a.oregon-postgres.render.com", //? Variable de entorno del host
    username: "cursos_tpi3_user",//? Variable de entorno del usuario
    password: "pYmHYgD08dmxyLnLKKJPoztY7f78Rc3P", //? Variable de entorno de la contraseña
    database: "cursos_tpi3", //? Variable de entorno de la base de datos
    dialectOptions: 
        process.env.NODE_ENV === 'production'
            ? {
                ssl: {
                    require: true,
                    rejectUnauthorized: false
                }
            } : { ssl: {
                require: true,
                rejectUnauthorized: false
            }}
})

module.exports = db