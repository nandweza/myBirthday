const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema(
    {
        content: { type: String, required: true },
        name: { type: String, requiredq: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Message", messageSchema);
