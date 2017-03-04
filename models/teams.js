// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
    var Teams = sequelize.define("Teams", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        creator: {
            type: Sequelize.INTEGER
        },
        project_name: {
            type: Sequelize.STRING
        },
        team_name: {
            type: Sequelize.STRING
        },
        // users: {
        //     type: Sequelize.STRING
        // },
        p_description: {
            type: Sequelize.TEXT
        },
        roles: {
            type: Sequelize.STRING
        }
    }, {
        timestamps: false,
        classMethods: {
            associate: function (models) {
                Teams.belongsTo(models.Events, {
                    as: 'EventTeams', constraints: false
                });
                Teams.belongsToMany(models.Users, {
                    through: "userTeams"
                });
            },  
        }
    });
    return Teams;
};