const Product = require("../models/productModel");

const productController = {
    async index(req, res, next) {
        let product;
        try{
            product = await Product.find();
        } catch (error) {
            res.status(404).json({ error: "Server error.", serverError: error });
        }
        res.status(200).json(product);
    
    
    },
    async store(req, res, next) {
        let product;
        try{
            const {title, description, price } = req.body;
            product = await Product.create({ title, description, price });
        } catch (error) {
            res.status(404).json({ error: "Server error.", serverError: error });
        }
        res.status(201).json(product);
    
    },

    async update(req, res, next) {
        let product; 
        try{
            const { id } = req.params;
            const {title, description,  } = req.body;
            product = await Product.findByIdAndUpdate(
                { _id: id },
                { title, description,  },
                {new:true});
            
        } catch (error) {
            res.status(404).json({ error: "Server error.", serverError: error });
        }
        res.status(201).json(product);
    
    },

    async delete(req, res, next) {
        let cat;
        try{
            const { _id } = req.body;
            cat = await Product.findByIdAndDelete({ _id: _id });
        } catch (error) {
            res.status(500).json({ error: "Server error.", serverError: error });
        }
        res.status(200).json(cat);
    },
};
module.exports = productController;