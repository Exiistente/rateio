const {INTEGER, STRING} = require('sequelize');
const CNN = require('./Cnn');

const Responsaveis = CNN.define('responsaveis', {
    idResponsavel: {
        type: INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    nomeResponsavel: {
        type: STRING,
        allowNull: false
    }
})

Responsaveis.sync();
module.exports = Responsaveis