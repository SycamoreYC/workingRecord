var MessageList = [

  { "Message": "React" },

  { "Message": "Webpack" },

  { "Message": "Nodejs" },

  { "Message": "Express" }

];

var db = require('../db');

exports.getMessageList = function (callback) {
	const sql1 = "SELECT * FROM message";
	db.get().query(sql1, function(err, result) {
		console.log(result);
		callback(result);
	});

};


