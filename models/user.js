const db = require('../config/dbconnection'); 

var User = {
	
	getAllUsers:function(callback){
		
		return db.query("Select * from users",callback);
	},

	getUserById:function(id,callback){
		
		return db.query("select * from users where id=?",[id], callback);
	},

	addUser:function(User,callback){

		return db.query("Insert into users values(?,?)",[User.id,User.name],callback);
	},

	deleteUser:function(id,callback){

		return db.query("delete from users where id=?",[id],callback);
	},

	updateUser:function(id,User,callback){

		return db.query("update users set name=? where id=?",[User.name,id],callback);
	}
	
};

module.exports=User;