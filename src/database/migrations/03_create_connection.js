const knex = require("knex");

async function up(knex) {
  return knex.schema.createTable("connection", (table) => {
    table.increments("id").primary();

    table
      .integer("user_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    table
      .timestamp("created_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP"))
      .notNullable();
  });
}

async function down(knex) {
  return knex.schema.dropTable("connection");
}

module.exports = { up, down };
