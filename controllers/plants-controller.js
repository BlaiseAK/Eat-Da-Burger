var express = require("express");

var router = express.Router();

var plant = require("../models/plant.js");

router.get("/", function(req, res) {
    plant.all(function(data) {
        var hbsObject = {
            plants: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/plants", function(req, res) {
    plant.create([
        "plant_name", "devoured"
    ], [
        req.body.plant_name, req.body.devoured
    ], function(result) {
        res.json({ id: result.insertID })
    });
});

router.put("/api/plants/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    plant.update({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;
