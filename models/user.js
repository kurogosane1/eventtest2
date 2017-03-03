// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
// var sequelize = require("../config/config.js");

// Creates a "User" model that matches up with DB
module.exports = function (sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    user_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
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
  },
    {
    timestamps: false
  });

  return Users;
};




  
  // classMethods: {
  //   associate: function (models) {
  //     Projects.belongsToMany(User, {
  //       through: 'Users',
  //       foreignKey: 'event_id'
  //     });
  //     Projects.belongsToMany(models.User, {
  //       foreignKey: {
  //         name: 'user_id',
  //         allowNull: false
  //                   }
  //           });
  //                       }
  //           },

// Syncs with DB
// Users.sync({});

// Makes the Chirp Model available for other files (will also create a table)
// module.exports = Users;
