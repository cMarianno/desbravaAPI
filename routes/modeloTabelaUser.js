const Sequelize = require('sequelize');
const instancia = require('../database');

const colunas = {
    user_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
}

const opcoes = {
    freezeTableName: true,
    tableName: 'sc_user',
    timestamps: true,
    createdAt: 'date_added',
    updatedAt: false
}

module.exports = instancia.define('siteClube', colunas, opcoes)