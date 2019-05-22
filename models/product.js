'use strict';

module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
        name: DataTypes.STRING,
        category_id: DataTypes.INTEGER
    },
    {
        freezeTableName: true,
        timestamps: false,
        underscored: true
    });

    Product.associate = function(models) {
        Product.belongsTo(models.Category, {
            foreignKey: 'category_id',
            as: 'category'
        });

        Product.hasMany(models.ProductDetail, {
            foreignKey: 'product_id',
            as: 'product_details'
        });
    };
  
    return Product;
};