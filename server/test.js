var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "mydb"
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log( "1 record inserted, ID: " + result.insertId);
//   });
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected");
  // var values = [
  //   ['John', 'Highway 71'],
  //   ['Peter', 'Lowstreet 4'],
  //   ['Amy', 'Apple st 652'],
  //   ['Hannah', 'Mountain 21'],
  //   ['Michael', 'Valley 345'],
  //   ['Sandy', 'Ocean blvd 2'],
  //   ['Betty', 'Green Grass 1'],
  //   ['Richard', 'Sky st 331'],
  //   ['Susan', 'One way 98'],
  //   ['Vicky', 'Yellow Garden 2'],
  //   ['Ben', 'Park Lane 38'],
  //   ['William', 'Central st 954'],
  //   ['Chuck', 'Main Road 989'],
  //   ['Viola', 'Sideway 1633']
  // ]
  // var values = [
  //   ['John', 154],
  //   ['Peter', 154],
  //   ['Amy', 155],
  //   ['Hannah', 0],
  //   ['Michael', 0]
  // ]
  var values = [
    [154, 'Chocolate Heaven'],
    [155, 'Tasty Lemons'],
    [156, 'Vanilla Dreams']
  ]
  // var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  // var sql = "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";
  // var sql = "INSERT INTO customers (name, address) VALUES ?";
  // var sql = "SELECT * FROM customers LIMIT 5 OFFSET 1";
  // var sql = "SELECT * FROM customers LIMIT 3, 5"
  // var sql = "SELECT name, address FROM customers";
  // var sql = "SELECT * FROM customers WHERE address = 'Park Lane 38'";
  // var name = 'Amy';
  // var adr = 'Mountain 21';
  // var sql = "SELECT * FROM customers WHERE name = ? OR address = ?";
  // var sql = "SELECT * FROM customers ORDER BY name";
  // var sql = "SELECT * FROM customers ORDER BY name DESC";
  // var sql = "SELECT * FROM customers WHERE address = 'Mountain 21'";
  // var sql = "DROP TABLE IF EXISTS customers";
  // var sql = "UPDATE customers SET address = 'asd' WHERE address = 'Blue Village 1'";

  // var sql = "CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), favorite_product VARCHAR(255))";
  // var sql = "INSERT INTO users (name, favorite_product) VALUES ?";
  // var sql = "CREATE TABLE products (id INT(10), name VARCHAR(255))";
  // var sql = "INSERT INTO products (id, name) VALUES ?"
  var sql = "SELECT users.name AS name, products.name AS favorite FROM users RIGHT JOIN products ON users.favorite_product = products.id";
  con.query(sql, [values], function(err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
