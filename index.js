const express = require('express');
const app = express();
const mongoose = require('mongoose');
const productModel = require('./models/product.model.js');
const productRoutes = require('./routes/product.route.js');
const dotenv = require('dotenv');
dotenv.config();

// Middleware Config
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/api/products', productRoutes);

// app.get('/', (req, res) => {

//     res.send('Homepage!');

// });

// // Getting all Products from DB.
// app.get('/api/products',);

// // Adding Products to DB
// app.post('/api/products', );

// // Getting individual Product by ID.
// app.get('/api/products/:id', );

// // Update individual Product by ID.
// app.put('/api/products/:id', )

// // Delete individual Product by ID.
// app.delete('/api/products/:id', );

mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("Connected to Database!");
    app.listen(process.env.PORT, () => {
        console.log(`Server running on PORT ${process.env.PORT}`);
    });
})
.catch(() => {
    console.log("Connection Failed!")
})