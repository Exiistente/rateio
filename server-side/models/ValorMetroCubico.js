const {INTEGER, STRING, FLOAT} = require('sequelize');
const CNN = require('./Cnn');

const ValorMetroCubico = CNN.define('valorMetroCubico', {
    idValorMetroCubico: {
        type: INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    ValorMetroCubico: {
        type: FLOAT,
        allowNull: false
    }
})

ValorMetroCubico.sync();
module.exports = ValorMetroCubico