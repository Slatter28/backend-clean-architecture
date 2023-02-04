const db = require("../../../../database/pg/connection");

const { DataTypes } = require("sequelize");

const User = db.define("user", {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      password: {
        type: DataTypes.STRING
      },
      is_active: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
      },
      google: {
          type: DataTypes.BOOLEAN,
          defaultValue: false
      }, 
    });

module.exports = User