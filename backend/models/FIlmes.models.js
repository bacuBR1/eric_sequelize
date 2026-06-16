const { DataTypes } = require("sequelize")
const db = require("../config/db")

const Filmes = db.define(
    "Filmes",    
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ano: {
            type: DataTypes.DATEONLY,
            allowNull:false
        }
    },
        {
            tableName:"Filmes",
            timestamps:false,
            freezeTableName: true       
        }
);

module.exports = Filmes;