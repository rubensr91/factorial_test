module.exports = app => {
    const metrics = require("../controllers/metric.controllers.js");

    var router = require("express").Router();
  
    // Create a new Metric
    router.post("/", metrics.create);
  
    // Retrieve all Metrics
    router.get("/", metrics.findAll);
  
    router.get("/:id", metrics.findOne);
  
    // Update a Metric with id
    router.put("/:id", metrics.update);
  
    app.use('/api/metrics', router);
  };