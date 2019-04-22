const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const productsRoutes = require('./routes/product');
const cartsRoutes = require('./routes/cart');

// Declare variable
const app = express();
const PORT = process.env.PORT || 8080;

// Connect database
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
    res.send('This is API orders app with nodejs');
});
app.use('/', productsRoutes);
app.use('/', cartsRoutes);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));