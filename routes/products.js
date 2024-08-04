const express = require('express');
const Ecommerce = require('../models/Product');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/category/:categoryName/product', auth(['admin']), async (req, res) => {
    try {
        const { categoryName } = req.params;
        const { id, name, weight, price, image } = req.body;

        let ecommerce = await Ecommerce.findOne();
        if (!ecommerce) {
            ecommerce = new Ecommerce({ title: 'Your E-Commerce Title', categories: [] });
            await ecommerce.save();
            
        }



        
        let category = ecommerce.categories.find(cat => cat.name === categoryName);
        if (!category) {
            category = { name: categoryName, products: [] };
            ecommerce.categories.push(category);
        }

        
        const newProduct = { id, name, weight, price, image };
        category.products.push(newProduct);

        await ecommerce.save();
        res.status(201).send(newProduct);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.put('/category/:categoryName/product/:productId', auth(['admin']), async (req, res) => {
    try {
        const { categoryName, productId } = req.params;
        const { id,name, weight, price, image } = req.body;

        const ecommerce = await Ecommerce.findOne();
        if (!ecommerce) {
            return res.status(404).send('Ecommerce document not found');
        }

        const category = ecommerce.categories.find(cat => cat.name === categoryName);
        console.log(category)
        if (!category) {
            return res.status(404).send(`Category ${categoryName} not found`);
        }

        const productItemIndex = category.products.findIndex(prod => prod.id === parseInt(productId));
        console.log(productItemIndex)
        if (productItemIndex === -1) {
            return res.status(404).send(`Product with ID ${productId} not found`);
        }

        category.products[productItemIndex] = { 
            ...category.products[productItemIndex],
            id: id || category.products[productItemIndex].id,
            name: name || category.products[productItemIndex].name,
            weight: weight || category.products[productItemIndex].weight,
            price: price || category.products[productItemIndex].price,
            image: image || category.products[productItemIndex].image
        };
        console.log(category.products[productItemIndex])

        await ecommerce.save();
        res.send(category.products[productItemIndex]);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.delete('/category/:categoryName/product/:productId', auth(['admin']), async (req, res) => {
    try {
        const { categoryName, productId } = req.params;

        const ecommerce = await Ecommerce.findOne();
        if (!ecommerce) {
            return res.status(404).send('Ecommerce document not found');
        }

        const category = ecommerce.categories.find(cat => cat.name === categoryName);
        if (!category) {
            return res.status(404).send(`Category ${categoryName} not found`);
        }

        const productIndex = category.products.findIndex(prod => prod.id === parseInt(productId));
        if (productIndex === -1) {
            return res.status(404).send(`Product with ID ${productId} not found`);
        }

        
        category.products.splice(productIndex, 1);
        await ecommerce.save();
        res.send(`Product with ID ${productId} deleted successfully`);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.get('/', async (req, res) => {
    try {
        const products = await Ecommerce.find();
        res.send(products);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;
