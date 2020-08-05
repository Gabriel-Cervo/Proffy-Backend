const express = require("express");
const ClassesController = require("./controllers/ClassesController");
const ConnectionsController = require("./controllers/ConnectionsController");

const routes = express.Router();
const classesController = new ClassesController();
const connectionsController = new ConnectionsController();

// ckasses
routes.post("/classes", classesController.create);
routes.get("/classes", classesController.index);

// connections
routes.post("/connections", connectionsController.create);
routes.get("/connections", connectionsController.index);

module.exports = routes;
