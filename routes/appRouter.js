const express = require('express');
const router = express.Router();


let posts = [];

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/post', (req, res) => {
    res.render('post');
});

module.exports = router;