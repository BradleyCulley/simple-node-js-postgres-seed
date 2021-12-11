const db = require("../models");
const Todo = db.todo;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Create a Tutorial
  const todo = {
    text: req.body.text,
    is_done: req.body.is_done
  };

  // Save Tutorial in the database
  Todo.create(todo)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "An error occurred while creating the todo."
      });
    });
};

// Retrieve all Todos from the database.
exports.findAll = (req, res) => {
  // res.send([]);
  
  Todo.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "An error occurred while retrieving Todos."
      });
    });
};
