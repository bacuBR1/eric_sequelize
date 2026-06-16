const { DataTypes, STRING } = require("sequelize")
const db = require("../config/db")

const Usuario = db.define(
    'Usuario',
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
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        idade: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        tableName:"Usuario",
        timestamps:false,
        freezeTableName: true 
    }
)

module.exports = Produto;