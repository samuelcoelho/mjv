'use strict';

module.exports = (sequelize, DataTypes) => {
    const ProductDetail = sequelize.define('ProductDetail', {
        id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        product_id: DataTypes.INTEGER
    },
    {
        freezeTableName: true,
        tableName: 'product_detail',
        timestamps: false,
        underscored: true
    });

    ProductDetail.associate = function(models) {
        ProductDetail.belongsTo(models.Product, {
            foreignKey: 'product_id',
            as: 'product'
        });
    };
    
    return ProductDetail;
};