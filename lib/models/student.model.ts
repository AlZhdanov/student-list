import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { database } from "../config/database";

export class Student extends Model {
  public id!: number;
  public name!: string;
  public birthdate!: Date;
  public grade!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export interface StudentInterface {
    name: string;
    birthdate: Date;
    grade: String;
  }

Student.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: new DataTypes.STRING(128),
        allowNull: false,
      },
      birthdate: {
        type: new DataTypes.DATE,
        allowNull: false,
      },
      grade: {
        type: new DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "students",
      sequelize: database,
    }
  );
  
  Student.sync({ force: true }).then(() => console.log("Student table created"));