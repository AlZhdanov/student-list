import { Sequelize } from "sequelize";

export const database = new Sequelize({
  database: "test_db",
  dialect: "sqlite",
  storage: ":memory:",
});