//Dependencies//
//====================================//
var path = require('path');

//Routes//
//====================================//
module.exports = function(app){
    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname, "/../public/index.html"));
    });
    app.get('/users', function(req, res){
        console.log('loading user route');
        console.log(__dirname);
        res.sendFile(path.join(__dirname, "/../public/profile.html"));
    });
};



