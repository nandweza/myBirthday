const express = require('express');
const router = express.Router();

const Message = require('../models/Post');


let messages = [];

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/post', async (req, res) => {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.render('post', { messages: messages });
});

router.post('/message', (req, res) => {
    const { content, name } = req.body;

    if (!content || !name) {
        return res.redirect('/message');
    }

    const messages = new Message({ content, name })

    messages
     .save()
     .then(() => {
        console.log('Message Created!');
        res.redirect('/post');
     })
     .catch(err => console.error(err));
});

module.exports = router;