var express = require('express');
var router = express.Router();
var Achievement = require('../models/achievement');

// Return a list of all achievements
router.get('/', function (req, res, next) {
    Achievement.find(function (err, achievements) {
        if (err) { return next(err); }
        res.json({ 'achievements': achievements });
    });
});

// Create a new achievement
router.post('/', function (req, res, next) {
    var achievement = new Achievement(req.body);
    achievement.save(function (err) {
        if (err) { return next(err); }
        res.status(201).json(achievement);
    });
});


module.exports = router;