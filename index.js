const express = require('express');
const app = express();
const mongoose = require('mongoose');
const petRoutes = require('./routes/pet.route.js');
const dotenv = require('dotenv');
const path = require('path');
const inject = require('@vercel/analytics')
// import { inject } from 'vercel/analytics';
dotenv.config();

// Middleware Config
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/api/pets', petRoutes);

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

// app.use('/docs', express.static('apidoc'));
app.use('/docs', express.static(path.join(__dirname, 'apidoc'))); // THIS!!

const port = process.env.PORT || 4000;
inject;
mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("Connected to Database!");
    app.listen(port, () => {
        console.log(`Server running on PORT ${port}`);
    });
})
.catch(() => {
    console.log("Connection Failed!")
})