const {INTEGER, STRING, FLOAT} = require('sequelize');
const CNN = require('./Cnn');

const Consumo = CNN.define('consumo', {
    idConsumo   : {
        type: INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    idCasa: {
        type: INTEGER, 
        allowNull: false,
        references: {
            model: "casas",
            key: "idCasa"
        }
    },
    idResponsavel: {
        type: INTEGER, 
        allowNull: false,
        references: {
            model: "responsaveis",
            key: "idResponsavel"
        }
    },
    valorMetro: {
        type: FLOAT,
    },
    valorMesAtual: {
        type: FLOAT,
    }
})

Consumo.sync();
module.exports = Consumo