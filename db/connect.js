var orm = require('orm');

var opts = {
  host:     'rm-bp149wm1147v7bw6pmo.mysql.rds.aliyuncs.com',
  database: 'zjj_lot',
  protocol: 'mysql',
  port:     '3306',
  query:    {pool: true}
};

orm.connectAsync(opts)
  .then(function(db) {

  })
  .catch(function() {
    console.error('Connection error: ' + err);
  });
