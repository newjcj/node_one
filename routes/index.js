var express = require('express');
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
  console.log(3333);
  var c=Math.random();
  // console.log(c);
  console.log(req.query.jcj);
  res.json({c:2,jcj:req.body,'cc':c});
});
router.post('/a', function(req, res, next) {
  console.log(22222);
  var c=Math.random();
  var form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files) {
    console.log(33);
    // console.log(fields);
    fs.renameSync(files.filee.path,`public/t${c}.jpg`);
    // console.log(files.filee);
  });
  // console.log(c);
  console.log(req.files);
  var c=Math.random();
  res.json({c:23,jcj:req.body,'cc':c});
});

module.exports = router;
