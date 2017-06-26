
var MongoClient=require('mongodb').MongoClient;
var mongoose = require('mongoose');
module.exports = {
  updateSeats: function (req, res){
    var query1={};
    var value=true;
    var person = req.body;
    console.log(person.length,person); 
    var myObjectId= mongoose.Types.ObjectId("58b6a2621a4588b264ccf4b7");//converting id into ObjectID
    for( i=0;i<person.length;i++){
    var result=person[i].object;
    var query=result.hall+".seats."+result.rowindex+"."+person[i].index+".booked";
    query1[query]=value;  //creating query
    
    MongoClient.connect('mongodb://127.0.0.1:27017/test',function(err,db){
    db.collection('seat').update({'_id':myObjectId},{$set:query1},function(err, result) {
      if (err){
          console.warn(err.message);  // returns error if no matching object found
      }else{
          //console.log(result);
          console.log('updated seats');
          query1={};
      }
    });
    
  });
    

  }
   
  },
  seeResults: function (req,res){
    console.log("seeResults");
    MongoClient.connect('mongodb://127.0.0.1:27017/test',function(err,db){
    var cursor=db.collection('seat').find();
    cursor.each(function (err, docs) {
    res.end(JSON.stringify(docs));     
    });
  });
  },
   userlogin: function (req,res){
    console.log("userlogin");
    MongoClient.connect('mongodb://127.0.0.1:27017/test',function(err,db){
    var cursor=db.collection('user').find({},{'userdetails.email':'ramana@gmail.com'});
    cursor.each(function (err, docs) {
    console.log(docs);  
    res.end(JSON.stringify(docs));  
    });
  });
  }
  /*delete: function( req, res, next){

    console.log("req.params.id");
    User.find({ _id: req.params.id}, function(err) {
      if(err) {
        req.status(504);
        req.end();
        console.log(err);
      }
    }).remove(function (err) {
      console.log(err);
      if (err) {
        res.end(err);            
      } else {
        res.end();
      }
    });
  }*/
}