module.exports = function(mongoose) {
    "use strict";
    //console.log(mongoose);
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var login = new Schema({
            
            Email : String,
             Password: String
          

    });

    var Login = mongoose.model('Login', login);
    return Login;
};