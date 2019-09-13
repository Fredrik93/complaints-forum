var express = require('express');
var router = express.Router();
var Post = require('../models/post');

router.get('/', function (req, res, next) {
    Post.find(function (err, posts) {
        if (err) { return next(err); }
        res.json({ 'posts': posts });
    });
});

//create a new post 
router.post('/', function (req, res, next) {
    var post = new Post(req.body);
    post.save(function (err) {

        if (err) {
            return next(err);
        }
        res.status(201).json(post);
    });
});

module.exports = router;