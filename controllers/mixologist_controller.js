var express = require("express");

var router = express.Router();

var mixologist = require("../models/mixologist.js")

router.get("/", function(req, res) {
    mixologist.all(function(data) {
      var hbsObject = {
        ingredients: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/api/ingredients", function(req, res) {
    mixologist.create([
      "ingredient_name", "used"
    ], [
      req.body.ingredient_name, req.body.used
    ], function(result) {
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/ingredients/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);

    console.log("req.body = " , req.body)

  
    mixologist.update({
      used: req.body.used
    }, condition, function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  router.delete("/api/ingredients/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    mixologist.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
    module.exports = router;