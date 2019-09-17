var express = require('express');
var router = express.Router();
var ComplaintsRoom = require('../models/complaintsRoom');

// Return a list of all complaintsRooms
router.get('/', function(req, res, next) {
    ComplaintsRoom.find(function(err, complaintsRoom) {
        if (err) { return next(err); }
        res.json({'complaintsRooms': achievementBoard});
    });
});

// Create a new complaintsRooms
router.post('/', function(req, res, next) {
    var complaintsRoom = new AchievementBoard(req.body);
    complaintsRoom.save(function(err) {
        if (err) { return next(err); }
        res.status(201).json(complaintsRoom);
    });
});

// Return the Room with the given ID
router.get('/:id', function(req, res, next) {
    var id = req.params.id;
    ComplaintsRoom.findById(id, function(err, complaintsRoom) {
        if (err) { return next(err); }
        if (complaintsRoom === null) {
            return res.status(404).json({'message': 'Room not found'});
        }
        res.json(complaintsRoom);
    });
});

// Delete the Rooms with the given ID
router.delete('/:id', function(req, res, next) {
    var id = req.params.id;
    ComplaintsRoom.findOneAndDelete({_id: id}, function(err, complaintsRoom) {
        if (err) { return next(err); }
        if (complaintsRoom === null) {
            return res.status(404).json({'message': 'Room not found'});
        }
        res.json(complaintsRoom);
    });
});

module.exports = router;