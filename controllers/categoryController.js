const Category = require("../models/categoryModel");

const categoryController = {
    async index(req, res, next) {
        let categories;
        try{
            categories = await Category.find();
        } catch (error) {
            res.status(404).json({ error: "Server error.", serverError: error });
        }
        res.status(200).json(categories);
    
    
    },
    
    
    async store(req, res, next) {
        let cat;
        try{
            const {title, description } = req.body;
            cat = await Category.create({ title, description,
                thumbnail: "upload/category/thumbnail/" + req.file.filename,
            });
        } catch (error) {
            res.status(404).json({ error: "Server error.", serverError: error });
        }
        res.status(201).json(cat);
    
    },
    
    async delete(req, res, next) {
        let cat;
        try{
            const { _id } = req.body;
            cat = await Category.findByIdAndDelete({ _id: _id });
        } catch (error) {
            res.status(500).json({ error: "Server error.", serverError: error });
        }
        res.status(200).json(cat);
    },
};
module.exports = categoryController;