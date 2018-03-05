/**
 * Created by songyechun on 18/3/5.
 */
var mysql = require('mysql');

const con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "123456",
	database: "mydb"
});

var state = {
	pool: null,
	mode: null
};

// con.connect(function(err) {
// 	if (err) throw err;
// 	console.log('Connected');
// });
//
// exports.connection = con;

exports.connect = function(done) {
	state.pool = mysql.createPool({
		host: 'localhost',
		user: 'root',
		password: '123456',
		database: 'mydb'
	});
	done();
};

exports.get = function() {
	return state.pool;
};