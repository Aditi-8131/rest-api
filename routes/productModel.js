const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema(
	{
		title: { type: String },
		description: { type: String },
	},
	{
		timestamps: true,
	}
);
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
