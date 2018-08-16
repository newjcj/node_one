var express = require('express');
var orm = require('orm');
var router = express.Router();
var formidable = require('formidable');
var fs = require('fs');
var path = require('path');

/* GET home page. */
router.get('/test', function(req, res, next) {
  var c=11;
  var dataa={"a":"tom","sex":"男","age":"24"};

  res.render('index', { title: 'Express',dataa: JSON.stringify(dataa) });
});

router.get('/a', function(req, res, next) {
  console.log(req.models.users.find);
  req.models.wpusers.all().order('users_id').offset(2).limit(2).run(function(err,data){
    console.log(1111);
    console.log(data[0].getUsers);
    res.json(data[0]);
  });
});
router.get('/b', function(req, res, next) {

  var opts = {
    host:     'rm-bp149wm1147v7bw6pmo.mysql.rds.aliyuncs.com',
    database: 'zjj_lot',
    protocol: 'mysql',
    password: 'Ping1986',
    port:     '3306',
    query:    {pool: true}
  };

  orm.connectAsync(opts)
    .then(function(db) {
      var users = db.define("users", {
        id      : Number,
        nickname   : String,
        openid   : String
      });
      users.find({id:2},function(err,data){
        res.json(data);
      })
    })
    .catch(function(err) {
      console.error('Connection error: ' + err);
    });

});



module.exports = router;
