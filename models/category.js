'use strict';
module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING
    },
    {
        freezeTableName: true,
        timestamps: false
    });

    Category.associate = function(models) {
        Category.hasMany(models.Product, {
            foreignKey: 'category_id',
            as: 'products'
        });
    };

    return Category;
};