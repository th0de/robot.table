const { Client } = require("pg");

const client = new Client(
  process.env.DATABASE_URL || "postgres://localhost:8080/robot-table"
)

module.exports = { client }