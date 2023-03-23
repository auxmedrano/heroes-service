import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  // "heroesdb", // db name,
  // "postgres", // username
  // "mysecretpassword", // password
  process.env.POSTGRES_DB, // db name,
  process.env.POSTGRES_USER, // username
  process.env.POSTGRES_PASSWORD, // password
  {
    //host: "localhost",
    //host: "some-postgres",
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    dialect: "postgres",
    // pool: {
    //   max: 5,
    //   min: 0,
    //   require: 30000,
    //   idle: 10000,
    // },
    // logging: false,
  }
);
