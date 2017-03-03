// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
// var sequelize = require("../config/config.js");

// Creates a "event" model that matches up with DB
module.exports = function (sequelize, DataTypes) {
  var Events = sequelize.define("Events", {
    Event_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    author: {
      type: Sequelize.TEXT
    },
    Status: {
      type: Sequelize.STRING,
      defaultValue: "Host"
    },
    event_Name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.TEXT
    },
    when_at: {
      type: Sequelize.DATE
    },
    time: {
      type: Sequelize.TIME
    },
    attendee: {
      type: Sequelize.INTEGER
    },
    location: {
      type: Sequelize.STRING
    }
  }, {
    timestamps: false
  });

  return Events;
}

// console.log(Events);

// creating a table to test upoming pop up//



// Syncs with DB
// Events.sync({});

// Makes the Chirp Model available for other files (will also create a table)
// module.exports = Events;