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
    userName: {
      type:Sequelize.STRING
    },
    First_name: {
      type:Sequelize.STRING
    },
    Last_name: {
      type:Sequelize.STRING
    },
    Skills: {
      type: Sequelize.TEXT,
    },
    Language: {
      type: Sequelize.STRING
    },
    Experience: {
      type: Sequelize.TEXT
    },
    Bio: {
      type: Sequelize.TEXT
    }
  },{
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
    },
    {
    timestamps: false
  });

  return Users;
};