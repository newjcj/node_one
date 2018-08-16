var orm = require('orm');
module.exports = orm.express("mysql://root:Ping1986@rm-bp149wm1147v7bw6pmo.mysql.rds.aliyuncs.com/zjj_lot", {
  define: function (db, models, next) {
    require('./user')(db, models)
    require('./wpusers')(db, models)
    next();
  }
})
