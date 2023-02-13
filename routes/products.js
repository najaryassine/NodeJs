var express = require('express');
var router = express.Router();
var fs = require('fs');


/* GET /products */
router.get('/', function(req, res, next) {
    fs.readFile('products.json', 'utf8', function(err, data) {
        if (err) {
            res.status(500).json({
                error: "Could not read products.json file"
            });
        } else {
            const products = JSON.parse(data);
            res.json({
                products: products
            });
        }
    });
});

router.get('/:id',(req,res,next)=>{
    fs.readFile('products.json', (err, data)=> {

        var products = JSON.parse(data);
        var product = products[req.params.id];
        if (!product) {
            return next(new Error("Product not found"));
        }
        res.send(product);
    });
});



router.get('/:id/:qt', (req, res) => {
    fs.readFile('products.json', (err, data) => {
        if (err) {
            res.status(500).json({
                error: "Could not read products.json file"
            });
        } else {
            const products = JSON.parse(data);
            const product = products[req.params.id];
            if (!product) {
                res.status(404).json({
                    error: "Product not found"
                });
            } else {
                const totalPrice = product.price * req.params.qt;
                res.json({
                    id: req.params.id,
                    qt: req.params.qt,
                    unit_price: product.price,
                    total_price: totalPrice
                });
            }
        }
    });
});



router.get('/instock/:qt', function(req, res, next) {
    fs.readFile('products.json', 'utf8', function(err, data) {
        if (err) {
            res.status(500).json({
                error: "Could not read products.json file"
            });
        } else {
            const products = JSON.parse(data);
            const filteredProducts = products.filter(function(product) {
                return product.qt >= req.params.qt;
            });

            if (!filteredProducts.length) {
                res.status(404).json({
                    error: "No products found with stock equal to or greater than " + req.params.qt
                });
            } else {
                res.json({
                    products: filteredProducts
                });
            }
        }
    });
});




module.exports = router;