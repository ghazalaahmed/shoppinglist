const { Schema, model } = require('mongoose');

const itemSchema = new Schema({
    itemText: {
        itemText: {
            type: String,
            required: 'Enter an item to buy',
            minlength: 1,
            maxlength: 280,
            trim: true,
        },
        itemAuthor: {
            type: String,
            required: true,
            trim: true,
        },
        isCollected: {
            type: Boolean,
        },
    },
});

const Item = model('Item', itemSchema);

module.exports = Item;