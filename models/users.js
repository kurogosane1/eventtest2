// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
// var sequelize = require("../config/config.js");

// Creates a "User" model that matches up with DB
module.exports = function (sequelize, DataTypes, Users) {
  var Users = sequelize.define("Users", {
    // user_id: {
    //   type: Sequelize.INTEGER,
    //   autoIncrement: true,
    //   primaryKey: true
    // },
    username: {
      type: Sequelize.STRING
    },
    first_name: {
      type: Sequelize.STRING
    },
    last_name: {
      type: Sequelize.STRING
    },
    skills: {
      type: Sequelize.TEXT,
    },
    language: {
      type: Sequelize.STRING
    },
    experience: {
      type: Sequelize.TEXT
    },
    bio: {
      type: Sequelize.TEXT
    }
  }, {
    timestamps: false,
    classMethods: {
      associate: function (models) {
        Users.belongsToMany(models.Events, {
          through: "userEvents"
        });
        Users.belongsToMany(models.Teams, {
          through: "userTeams"
        });
      }
    }
  });
  return Users;
};