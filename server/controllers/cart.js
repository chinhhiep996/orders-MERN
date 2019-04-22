const Cart = require('../models/cart');

exports.getCarts = (req, res, next) => {
    Cart.find()
        .then(result => {
            res.json(result);
        })
        .catch(error => console.log(error));
}

exports.createCart = (req, res, next) => {
    const newCart = new Cart({
        name: req.body.name,
        price: req.body.price
    });

    newCart.save()
        .then(result => {
            res.json(result);
        })
        .catch(error => console.log(error));
}

exports.changeAmount = async (req, res, next) => {
    try {
        const cart = await Cart.findOne({ name: req.body.name })
        if(cart) {
            cart.amount += 1;
            cart.save()
                .then(result => {
                    res.json(result);
                })
                .catch(error => console.log(error));
        } else {
            const newCart = new Cart({
                name: req.body.name,
                price: req.body.price
            });
        
            newCart.save()
                .then(result => {
                    res.json(result);
                })
                .catch(error => console.log(error));
        }
    } catch(error) {
        console.log(error);
    }
}