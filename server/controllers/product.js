const Product = require('../models/product');

exports.createProduct = async (req, res) => {
    const newProduct = await new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        imageUrl: req.body.imageUrl,
        amount: req.body.amount
    });

    newProduct.save()
        .then(result => {
            res.status(200).json(result)
        })
        .catch(error => console.log(error));
}

exports.getAllProducts = (req, res) => {
    Product.find()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(error => console.log(error))
}

exports.getProduct = (req, res) => {
    Product.findById(req.params.productId)
        .then(result => {
            res.status(200).json(result);
        })
        .catch(error => console.log(error));
}

exports.editProduct = async (req, res) => {
    let editProduct = await Product.findById(req.params.productId);

    editProduct.name = req.body.name;
    editProduct.description = req.body.description;
    editProduct.price = req.body.price;
    editProduct.imageUrl = req.body.imageUrl;
    editProduct.amount = req.body.amount

    editProduct.save()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(error => console.log(error));
}

exports.deleteProduct = (req, res) => {
    Product.findByIdAndDelete(req.params.productId)
        .then(result => {
            res.json(result)
        })
        .catch(error => console.log(error));
}