import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Hero } from "./Hero.js";

export const Publisher = sequelize.define(
  "publisher",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    }
  },
  {
    timestamps: false,
  }
);

Publisher.hasMany(Hero, {
  foreinkey: "publisherId",
  sourceKey: "id",
});
Hero.belongsTo(Publisher, { foreinkey: "publisherId", targetId: "id" });
