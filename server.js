var express = require('express');
var path = require('path');
var ejs = require('ejs');

var app = express();

// 新增接口路由
app.get('/data/:module', function (req, res, next) {
    var c_path = req.params.module;
    var Action = require('./server/actionData/' + c_path);
    Action.execute(req, res);
});

app.get('/', function (req, res) {
    res.render('index');
});
app.set('views', './client/dist');
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

app.use('/client/dist', express.static(path.join(__dirname, 'client/dist')));

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
