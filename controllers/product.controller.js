const productModel = require('../models/product.model');

// Getting all Products from DB.
const getProducts = async (req, res) => {
    try {
       const products =  await productModel.find({});
       res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

// Getting individual Product by ID
const getProductById = async (req, res) => {
    try {
        const { id } = req.params; // id variable needs to be same as the id parameter.
        const product = await productModel.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const addProduct = async (req, res) => {
    try {
        const product = await productModel.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        
        const product = await productModel.findByIdAndUpdate(id, req.body);

        if(!product) {
            return res.status(404).json({message: "Product not found"});
        }

        const updatedProduct = await productModel.findById(id);
        res.status(200).json(updatedProduct);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await productModel.findByIdAndDelete(id);

        if(!product) {
            return res.status(404).json({message: "Product not found"});
        }

        res.status(200).json({message: "Product Deleted Successfully!"});

    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

module.exports = {
    getProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct,
}