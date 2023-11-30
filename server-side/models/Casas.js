const {INTEGER, STRING} = require('sequelize');
const CNN = require('./Cnn');

const Casas = CNN.define('casas', {
    idCasa: {
        type: INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    idResponsavel: {
        type: INTEGER, 
        allowNull: false,
        references: {
            model: "responsaveis",
            key: "idResponsavel"
        }
    },
    endereco: {
        type: STRING,
        allowNull: false
    }
})

Casas.sync();
module.exports = Casas