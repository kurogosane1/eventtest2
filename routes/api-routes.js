// dependencies
//====================================//
// var connection = require("../config/config.js");
var moment = require('moment');
var db = require('../models');
moment().format();


//Routes
//======================//
module.exports = function(app){

    //Get the events//
    app.get('/api/all', function(req, res){
        db.Events.findAll({}).then(function(results){
           res.json(results);
        });
    });
// Add a new event
    app.post('/api/new/events', function(req, res){
        console.log('event data');
        console.log(req.body);
        db.Events.create({
            creator: req.body.creator,
            event_Name: req.body.event_Name,
            time: req.body.time,
            // attendee: req.body.attendee,
            street_number:req.body.street_number,
            street:req.body.street,
            city :req.body.city,
            state :req.body.state,
            description : req.body.description,
            when_at: req.body.when_at
        }).then(function(results){
            res.json(results);
            //me trying to combine the database//
        })


    });
    //to get from the db the User information//
    app.get('/api/users', function(req, res){
        db.Users.findAll({}).then(function(results){
            console.log(req);
           res.json(results);
        });
    });

//get a new user //r
    app.post('/api/new/users', function(req, res){
        console.log('userinformation');
        console.log(req.body);
        db.Users.create({
            username: req.body.username,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            skills: req.body.skills,
            language:req.body.language,
            experience: req.body.experience,
            bio: req.body.bio
        }).then(function(results){
            res.json(results);
        })


    });
    //to get from the db the User information//
    app.get('/api/teams', function(req, res){
        db.Users.findAll({}).then(function(results){
           res.json(results);
        });
    });

//get a new user //r
    app.post('/api/new/teams', function(req, res){
        console.log('teamInformation');
        console.log(req.body);
        db.Teams.create({
            team_id: req.body.team_id,
            team_name: req.body.team_name,
            project_name: req.body.project_name,
            users: req.body.users,
            p_description:req.body.p_description,
            roles: req.body.roles,
            event_id: req.body.event_id
        }).then(function(results){
            res.json(results);
        })


    });
};
