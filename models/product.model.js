const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Product name required!"],
        },

        quantity: {
            type: Number,
            required: [true, "Product qty required!"],
            default: 0,
        },

        price: {
            type: Number,
            required: true,
            default: 0,
        },

    }
)

// The Product model that would be added to the DB and would be automatically updated to "Products".
const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;