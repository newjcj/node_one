module.exports = function(db, models){
  models.users = db.define("users", {
    id      : Number,
    nickname   : String,
    openid   : String,
    head_image   : String,
  });
}
