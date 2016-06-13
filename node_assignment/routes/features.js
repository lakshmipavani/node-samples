var express = require('express');
var router = express.Router();


var mongoose = require('mongoose');
var Feature = mongoose.model('Feature');

router.post('/addFeature',addFeature);
router.get('/listallFeatures',showAllFeatures);
router.delete('/deletefeature',deleteFeature);

router.get('/edit/:id',editfeature);
router.delete('/delete/:id',deleteFeature);


function editfeature(req, res){

    if(req.query.update!= undefined){
        console.log(req.query);
       if(req.query.update == 'update'){
         Feature.update({_id:req.params.id}, {$set:{Key:req.query.Key,
            Value :req.query.Value,
            Active :"True" }}, {w:1}, function(err, result) {
              if(err){
                console.log(err.stack);
              }
              res.redirect('/features/listallFeatures');
            });
        } 
    }else{
        Feature.findOne({"_id":req.params.id},function(err, feature){
        if(err){
            res.render({"msg" : "Something went wrong"});
        }
        res.render('featuresEdit.html', {"feature": feature});
        });
    }

}

function addFeature(req, res) {

    res.render('featureAddnew.html');
}
router.get('/deletecategory', function(req, res) {

});


/*

function addFeature(req,res){
	var feature = new Feature(req.body);
    feature.save(function(err, feature){
     	if(err){
        console.log("feature not added");
        res.statusCode = 404;
     		}
     	if(feature){
     	console.log("Feature added"+ feature);
        res.redirect('/features/listallFeatures');
       
             }
     });
} */


function showAllFeatures(req,res){
  Feature.find({}, function(err, features){
    res.render('listFeatures.html', {"features" : features});
  });
}


function deleteFeature(req, res){
  
  Feature.remove({_id:req.params.id},function(err, feature){
   
  console.log("feature delted");

  });
}
module.exports = router;
