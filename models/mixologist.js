var orm = require("../config/orm.js");

var mixologist = {
    all: function(cb) {
      orm.all("ingredients", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
      orm.create("ingredients", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.update("ingredients", objColVals, condition, function(res) {
        cb(res);
      });
    },
    delete: function(condition, cb) {
    orm.delete("ingredients", condition, function(res) {
      cb(res);
    });
  }
  };

  module.exports = mixologist;
