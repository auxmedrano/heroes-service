import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Hero = sequelize.define(
  "heroes",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    superhero: {
      type: DataTypes.STRING,
    },
    alter_ego: {
      type: DataTypes.STRING,
    },
    first_appearance: {
      type: DataTypes.STRING,
    },
    characters: {
      type: DataTypes.STRING
    },
    alt_img: {
      type: DataTypes.STRING
    }
  },
  {
    timestamps: false,
  }
);
