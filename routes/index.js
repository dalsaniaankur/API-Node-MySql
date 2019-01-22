const routes = require('express').Router();

const User = require('../models/user');

/*routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});*/

routes.get('/', function (req, res) {
	res.send('Home');
});

routes.get('/about', function (req, res) {
	res.send('About');
});

routes.get('/params/:id/:id1?', function (req, res) {
	res.send(req.params);
});


routes.get('/user/:id?',function(req,res,next){

	if(req.params.id){

		User.getUserById(req.params.id,function(err,results){

			if(err)
			{
				res.send(JSON.stringify({"status": 200, "error": err, "response": null}))
			}
			else{
				res.send(JSON.stringify({"status": 200, "error": null, "response": results}))
			}
		});

	} else {

		User.getAllUsers(function(err,results){

			if(err)
			{
				res.send(JSON.stringify({"status": 200, "error": err, "response": null}))
			}
			else
			{
				res.send(JSON.stringify({"status": 200, "error": null, "response": results}))
			}

		});
	}
});

routes.get('/user/delete/:id',function(req,res,next){

	if(req.params.id){

		User.deleteUser(req.params.id,function(err,results){

			if(err)
			{
				res.send(JSON.stringify({"status": 200, "error": err, "response": null}))
			}
			else{
				res.send(JSON.stringify({"status": 200, "error": null, "response": results}))
			}
		});
	}
});


module.exports = routes;