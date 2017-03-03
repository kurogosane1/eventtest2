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
    app.post('/api/new', function(req, res){
        console.log('event data:');
        // console.log(req.body);
        db.Events.create({
            author: req.body.author,
            event_Name: req.body.event_Name,
            time: req.body.time,
            attendee: req.body.attendee,
            location:req.body.location,
            description: req.body.description,
            when_at: req.body.when_at
        }).then(function(results){
            res.json(results);
        })


    });
    //to get from the db the User information//
    app.get('/api/users', function(req, res){
        db.Users.findAll({}).then(function(results){
           res.json(results);
        });
    });

//get a new user //r
    app.post('/api/new/users', function(req, res){
        console.log('userinformation');
        console.log(req.body);
        db.Users.create({
            userName: req.body.userName,
            First_name: req.body.First_name,
            Last_name: req.body.Last_name,
            Skills: req.body.Skills,
            Language:req.body.Language,
            Experience: req.body.Experience,
            Bio: req.body.Bio
        }).then(function(results){
            res.json(results);
        })


    });
};
