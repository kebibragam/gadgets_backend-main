var DataTypes = require("sequelize").DataTypes;
var _login = require("./login");
var _user = require("./user");
var _user_confirmation = require("./user_confirmation");

function initModels(sequelize) {
  var login = _login(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);
  var user_confirmation = _user_confirmation(sequelize, DataTypes);

  login.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(login, { as: "logins", foreignKey: "user_id"});
  user_confirmation.belongsTo(user, { as: "user", foreignKey: "userId"});
  user.hasMany(user_confirmation, { as: "user_confirmations", foreignKey: "userId"});

  return {
    login,
    user,
    user_confirmation,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
