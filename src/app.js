const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const routes = require('./core/user/infrastructure/routes/user')
const db = require('./database/pg/connection')
const swaggerUi = require('swagger-ui-express')
const swaggerJsdoc = require("swagger-jsdoc")
const initModels = require('./database/pg/init_models')
const options = require('./shared/infrastructure/docs/initModels')
// bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json())
app.use(routes)

// === BOILERPLATE ===
// Catch and send error messages
app.use((err, req, res, next) => {
  if (err) {
    console.error(err.message)
    if (!err.statusCode) {
      err.statusCode = 500
    } // Set 500 server code error if statuscode not set
    return res.status(err.statusCode).send({
      statusCode: err.statusCode,
      message: err.message
    })
  }

  next()
})


db.authenticate()
    .then(() => {
        console.log('Database Authenticated')
    })
    .catch(err => {
        console.log(err)
    })
// db.sync()
//     .then(() => {
//         console.log('Database Synced')
//     })
//     .catch(err => {
//         console.log(err)
//     })

initModels()

  

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerJsdoc(options))
);




const PORT = 3000


app.get('/',(req, res) => {
    res.status(200).json({
        message: 'OK!',
        users: `localhost:${PORT}/api/v1/`
    })
})

app.use(function (req, res) {
    res.status(404).json({
      status: 'Page does not exist'
    });
  });
app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
})