const { DataTypes, STRING } = require("sequelize")
const db = require("../config/db")

const Produto = db.define(
    'Produto',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        preco: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        tableName:"Produto",
        timestamps:false,
        freezeTableName: true 
    }
)

module.exports = Produto;