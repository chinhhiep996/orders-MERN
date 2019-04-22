const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cartSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        default: 1
    }
});

module.exports = mongoose.model('Cart', cartSchema, 'carts');