'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Product, {
        foreignKey: "productId"
      })
      // define association here
    }
  }
  Cart.init({
    productId: DataTypes.INTEGER,
    phone_number: DataTypes.STRING,
    qty: DataTypes.INTEGER,
    ip: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.ENUM('ACTIVE', 'PAID'),
      defaultValue: 'ACTIVE'
    }
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};