var express = require('express');
var router = express.Router();
var Admin = require('../models/admin');

// Return a list of all admins
router.get('/', function(req, res, next) {
    Admin.find(function(err, camels) {
        if (err) { return next(err); }
        res.json({'admins': admins});
    });
});

// Create a new camel
router.post('/', function(req, res, next) {
    var admin = new Admin(req.body);
    admins.save(function(err) {
        if (err) {
            return next(err);
        }
        res.status(201).json(admin);
    });
});

// Return the admin with the given ID
router.delete('/:id', function(req, res, next) {
    var id = req.params.id;
    Admin.findById(id, function(err, admin) {
        if (err) {return next(err); }
        if (admin === null) {
            return res.status(404).json({'message': 'Admin not found'});
        }
        res.json(admin);
    });
});

//Delete the camel with the given ID
router.delete('/:id', function(req, res, next) {
    var id = req.params.id;
    Admin.findOneAndDelete({_id: id}, function(err, admin) {
        if (err) { return next(err); }
        if (admin === null) {
            return res.status(404).json({'message': 'Admin not found'});
        }
        res.json(admin);
    });
});

module.exports = router;