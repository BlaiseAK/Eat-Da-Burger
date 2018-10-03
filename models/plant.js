// Import the ORM to create functions
var orm = require("../config/orm.js");

var plant = {
    all: function(cb) {
        orm.all("plants", function(res) {
            cb(res);
        });
    },
    create: function(cols, vals, cb) {
        orm.create("plants", cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update("plants", objColVals, condition, function(res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller
module.exports = plant;