module.exports = app => {
  const todosController = require("../controllers/todo.controller.js");

  const router = require("express").Router();

  // Create a new Tutorial
  router.post("/", todosController.create);

  // Retrieve all Tutorials
  router.get("/", todosController.findAll);

  app.use("/api/todo", router);
};
