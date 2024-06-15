const Category = require("../models/categoryModel");

const categoryController = {
	async index(req, res, next) {
		let categories;
		try {
			categories = await Category.find();
		} catch (error) {
			res.status(404).json({ error: "Server error.", serverError: error });
		}
		res.status(200).json(categories);
		// 	res.status(200).json([
		// 		{
		// 			id: "1",
		// 			name: "kishan",
		// 		},
		// 		{
		// 			id: "2",
		// 			name: "vijay",
		// 		},
		// 	]);
	},
	async delete(req, res, next) {
		let categories;
		try {
			const { id } = req.body;
			categories = await Category.findByIdAndDelete({ _id: id });
		} catch (error) {
			res.status(500).json({ error: "Server error.", serverError: error });
		}
		res.status(200).json(categories);
	},
	async store(req, res, next) {
		let cat;
		try {
			const { title, description } = req.body;
			cat = await Category.create({
				title,
				description,
				thumbnail: "uploads/category/thumbnail/" + req.file.filename,
			});
		} catch (error) {
			res.status(500).json({ error: "Server error.", serverError: error });
		}
		res.status(201).json(cat);
	},
	// async unique(req, res, next) {
	// 	let cat;
	// 	try {
	// 		const { id } = req.params;
	// 		console.log(req.params);
	// 		const { title, description } = req.body;
	// 		cat = await Category.findById({ _id: id });
	// 	} catch (error) {
	// 		res.status(500).json({ error: "Server error.", serverError: error });
	// 	}
	// 	res.status(200).json(cat);
	// },
	async update(req, res, next) {
		let cat;
		try {
			const { id } = req.params;
			// console.log(req.params);
			const { title, description } = req.body;
			cat = await Category.findByIdAndUpdate(
				{ _id: id },
				{ title, description },

				{ new: true }
			);
		} catch (error) {
			res.status(500).json({ error: "Server error.", serverError: error });
		}
		res.status(200).json(cat);
	},
	async unique(req, res, next) {
		console.log("IS CALL");
		let cat;
		try {
			const { title, description } = req.body;
			cat = await Category.findOne({}, title);
		} catch (error) {
			res.status(500).json({ error: "Server error.", serverError: error });
		}
		res.status(200).json(cat);
	},
};
module.exports = categoryController;
