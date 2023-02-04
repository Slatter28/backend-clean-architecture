const path = require('path')

const options = {
    definition: {
        openapi: "3.0.3",
        info: {
          title: "Documentación de la API De una aprende",
          version: "0.1.0",
          description:
            "Documentación hecha con swagger para la API de una aprende",
        },
        servers: [
          {
            url: "http://localhost:3000",
          },
        ],
      },
        apis: [ `${path.join(__dirname, "./*.js")}`],
  };

  module.exports = options;