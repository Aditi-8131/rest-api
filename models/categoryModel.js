const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const categorySchema = new Schema(
    {
        title: {type: String },

        description: { type:String },

        thumbnail: { type:String },
    },

    { 
        timestamp: true,
    }
);
const Category = mongoose.model("Category", categorySchema)
module.exports = Category;