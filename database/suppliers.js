module.exports = (sequelize, DataTypes) => {
  const suppliers = sequelize.define('suppliers', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })

  return suppliers
}
