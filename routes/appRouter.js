const express = require('express');
const router = express.Router();

const Message = require('../models/Post');


let messages = [];

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/post', async (req, res) => {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.render('post', { messages: messages, _id: messages._id });
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

// delete a message
router.delete('/post/:messageId', async (req, res) => {
    try {
        const { messageId } = req.params;
        const deletedMessage = await Message.findByIdAndDelete(messageId);

        if (!deletedMessage) {
            return res.status(404).json({ message: 'Message not found' });
        }

        res.status(200).json({ message: 'Message deleted successfully' });
    } catch (error) {
        console.error('Error deleting message:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;