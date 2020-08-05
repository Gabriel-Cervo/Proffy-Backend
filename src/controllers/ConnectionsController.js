const db = require("../database/connection");

module.exports = class ConnectionsController {
  async index(req, res) {
    const totalConnections = await db("connection").count("* as total");

    const { total } = totalConnections[0];

    return res.json({ total });
  }

  async create(req, res) {
    const { user_id } = req.body;

    await db("connection").insert({
      user_id,
    });

    return res.status(201).send();
  }
};
