const Sequelize = require('sequelize')

const sequelize = new Sequelize("postgres://postgres:EFA123@localhost:5432/eleven-journal")

module.exports = sequelize