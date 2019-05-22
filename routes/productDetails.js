var express = require('express');
var router = express.Router();
var model = require('../models/index');

// TODO: Retirar o acesso ao model do router

/* GET */
router.get('/', function(req, res, next) {
    model.ProductDetail.findAll({})
    .then(productDetails => res.json({
        error: false,
        data: productDetails
    }))
    .catch(error => res.json({
        error: true,
        data: [],
        error: error
    }))
});

/* POST */
router.post('/', function(req, res, next) {
    const {
        name,
        description,
        product_id
    } = req.body;

    model.ProductDetail.create({
        name: name,
        description: description,
        product_id: product_id
    })
    .then(product => res.status(201).json({
        error: false,
        data: productDetail,
        message: 'New Product Detail has been created.'
    }))
    .catch(error => res.json({
        error: true,
        data: [],
        error: error
    }));
});

/* PUT */
router.put('/:id', function(req, res, next) {
    const productDetailId = req.params.id;
    const {
        name,
        description,
        product_id
    } = req.body;

    model.ProductDetail.update({
        name: name,
        description: description,
        product_id: product_id
    },
    {
        where: {
            id: productDetailId
        }
    })
    .then(productDetail => res.status(201).json({
        error: false,
        message: 'ProductDetail has been updated.'
    }))
    .catch(error => res.json({
        error: true,
        data: [],
        error: error
    }));
});

/* DELETE */
router.delete('/:id', function(req, res, next) {
    const productDetailId = req.params.id;

    model.ProductDetail.destroy({
        where: {
            id: productDetailId
        }
    })
    .then(status => res.status(201).json({
        error: false,
        message: 'ProductDetail has been deleted.'
    }))
    .catch(error => res.json({
        error: true,
        error: error
    }));
});

module.exports = router;
