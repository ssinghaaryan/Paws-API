const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());

app.get('/', (req, res) => {

    res.send('Homepage!');

});

app.post('/api/products', (req, res) => {
    res.send("Data added");
});

mongoose.connect("mongodb+srv://aryan:mongodbatlas@apidb.wv9omfb.mongodb.net/Node-API?retryWrites=true&w=majority&appName=ApiDB")
.then(() => {
    console.log("Connected to DB");
    app.listen(4000, () => {
        console.log('Server running on PORT 4000');
    });
})
.catch(() => {
    console.log("Connection Faileed.")
})