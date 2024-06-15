const Product = require("../models/productModel");

const productController = {
	async index(req, res, next) {
		let pro;
		try {
			pro = await Product.find();
		} catch (error) {
			res.status(404).json({ error: "Server error.", serverError: error });
		}
		res.status(200).json(pro);
	},
	async delete(req, res, next) {
		let pro;
		try {
			const { id } = req.body;
			pro = await Product.findByIdAndDelete({ _id: id });
		} catch (error) {
			res.status(500).json({ error: "Server error.", serverError: error });
		}
		res.status(200).json(pro);
	},
	async store(req, res, next) {
		let pro;
		try {
			const { title, description } = req.body;
			pro = await Product.create({ title, description });
		} catch (error) {
			res.status(404).json({ error: "Server error.", serverError: error });
		}
		res.status(201).json(pro);
	},
};
module.exports = productController;
