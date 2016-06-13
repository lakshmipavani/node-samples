var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Login = mongoose.model('Login');


router.post('/login',login);

//router.get('/delete/:id',deleteCategory);



function login(req,res){
    var login= new Login(req.body);

      
      
   
        if(login.Email=== "pavu" && login.Password=== "password"){
             console.log("login success");
           
                 res.send("log success");
                    
             }
             else{
                console.log(" login failed");
                 res.redirect('/');



             }
     }








module.exports = router;
