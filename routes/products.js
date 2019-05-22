var express = require('express');
var router = express.Router();
var model = require('../models/index');

/* GET */
// All
router.get('/', function(req, res, next) {
    model.Product.findAll({})
    .then(products => res.json({
        error: false,
        data: products
    }))
    .catch(error => res.json({
        error: true,
        data: [],
        error: error
    }))
});

// By page limited by 10
router.get('/:page', function(req, res, next) {
    let limit = 10;
    let offset = 0;

    model.Product.findAndCountAll()
    .then((data) => {
        let page = req.params.page || 1;
        let pages = Math.ceil(data.count / limit);
        let offset = limit * (page - 1);

        model.Product.findAll({
            limit: limit,
            offset: offset,
            $sort: { id: 1 }
        })
        .then(products => res.json({
            error: false,
            pages: pages,
            count: data.count,
            data: products
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
    });
});

/* POST */
router.post('/', function(req, res, next) {
    const {
        name,
        category_id
    } = req.body;

    model.Product.create({
        name: name,
        category_id: category_id
    })
    .then(product => res.status(201).json({
        error: false,
        data: product,
        message: 'New product has been created.'
    }))
    .catch(error => res.json({
        error: true,
        data: [],
        error: error
    }));
});

/* PUT */
router.put('/:id', function(req, res, next) {
    const productId = req.params.id;
    const {
        name,
        category_id
    } = req.body;

    model.Product.update({
        name: name,
        category_id: category_id
    },
    {
        where: {
            id: productId
        }
    })
    .then(product => res.status(201).json({
        error: false,
        message: 'Product has been updated.'
    }))
    .catch(error => res.json({
        error: true,
        data: [],
        error: error
    }));
});

/* DELETE */
router.delete('/:id', function(req, res, next) {
    const productId = req.params.id;

    model.Product.destroy({
        where: {
            id: productId
        }
    })
    .then(status => res.status(201).json({
        error: false,
        message: 'Product has been deleted.'
    }))
    .catch(error => res.json({
        error: true,
        error: error
    }));
});

module.exports = router;
