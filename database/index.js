const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const DB = {}

const sequelize = new Sequelize(
  process.env.DB_DEFAULT_DB, 
  process.env.DB_USERNAME, 
  process.env.DB_PASSWORD, 
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
  }
)

fs
  .readdirSync(__dirname)
  .filter(model => model != 'index.js')
  .forEach(modelName => {
    DB[modelName.slice(0, -3)] = require(path.join(__dirname, modelName))(sequelize, Sequelize.DataTypes)
  })

sequelize.sync()
	.then(() => console.log('posts table has been successfully created, if one doesn\'t exist'))
  .catch(error => console.log('An error has occured', error))
  
module.exports = DB
