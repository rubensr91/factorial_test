const db = require("../models/metric.model");
const Metric = db.metric;

// Create and Save a new Metric
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Metric
  const metric = new Metric({
    name: req.body.name,
    value: req.body.value,
  });

  // Save Metric in the database
  metric
    .save(metric)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Metric.",
      });
    });
};

// Retrieve all Metrics from the database.
exports.findAll = (req, res) => {
  Metric.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

// Find a single Metric with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Metric.findById(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: "Not found Metric with id " + id });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving Metric with id=" + id });
    });
};

// Update a Metric by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  Metric.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Metric with id=${id}. Maybe Metric was not found!`,
        });
      } else {
        res.send({ message: "Metric was updated successfully." });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Metric with id = " + id,
      });
    });
};
