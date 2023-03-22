import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "heroesdb", // db name,
  "postgres", // username
  "mysecretpassword", // password
  // process.env.HEROES_SERVICE_DB, // db name,
  // process.env.HEROES_SERVICE_DB_USER, // username
  // process.env.HEROES_SERVICE_DB_PASS, // password
  {
    //host: "localhost",
      host: "some-postgres",
    // host: process.env.HEROES_SERVICE_HOST,
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
