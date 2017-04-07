const router=require('express').Router();
var operaciones=require('./crud.js');
var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost/colegio"

router.get('/agregar',function(req,res){
	MongoClient.connect(url, function(err, db){
		if (err)console.log(err)
		console.log("Connection successful")
			Operaciones.insertRegistro(db, (error, result) =>{
			if(error)console.log("Error trying to insert: " + error)
		})
	})
});

module.exports=router;