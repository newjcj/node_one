module.exports = function(db, models){
  models.wpusers = db.define("wpusers", {
    id      : Number,
    wpublics_id   : Number,
    users_id   : Number,
  });
  models.wpusers.hasOne('users',{
    openid : String
  })
}
