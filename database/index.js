const Sequelize = require('sequelize');
const config = require('config')
const instacia = new Sequelize(
    config.get('mysql.banco-de-dados'),
    config.get('mysql.usuario'),
    config.get('mysql.senha'),
    {
        host: config.get('mysql.host'),
        port: config.get('mysql.port'),
        dialect: 'mysql'
    }
)

module.exports = instacia