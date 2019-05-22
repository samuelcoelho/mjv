var express = require('express');
var router = express.Router();
var model = require('../models/index');

// TODO: Retirar o acesso ao model do router

/* GET */
router.get('/', function(req, res, next) {
    model.Category.findAll({})
    .then(categories => res.json({
        error: false,
        data: categories
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
        name
    } = req.body;

    model.Category.create({
        name: name
    })
    .then(category => res.status(201).json({
        error: false,
        data: category,
        message: 'New Category has been created.'
    }))
    .catch(error => res.json({
        error: true,
        data: [],
        error: error
    }));
});

/* PUT */
router.put('/:id', function(req, res, next) {
    const CategoryId = req.params.id;
    const {
        name
    } = req.body;

    model.Category.update({
        name: name
    },
    {
        where: {
            id: CategoryId
        }
    })
    .then(category => res.status(201).json({
        error: false,
        message: 'Category has been updated.'
    }))
    .catch(error => res.json({
        error: true,
        data: [],
        error: error
    }));
});

/* DELETE */
router.delete('/:id', function(req, res, next) {
    const categoryId = req.params.id;

    model.Category.destroy({
        where: {
            id: categoryId
        }
    })
    .then(status => res.status(201).json({
        error: false,
        message: 'Category has been deleted.'
    }))
    .catch(error => res.json({
        error: true,
        error: error
    }));
});

module.exports = router;
