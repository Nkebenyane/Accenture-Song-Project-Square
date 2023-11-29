const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
app.use(bodyParser.json());

app.use(cors());

mongoose.connect('mongodb://localhost:27017/testDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');

        // Start your server once connected
        app.listen(3001, () => {
            console.log('Server is running on port 3001');
        });

        // Add data insertion logic here
        insertInitialData();
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

const Brand = mongoose.model('Brand', {
    name: String,
    logo: String,
    published: Boolean,
    // ... other properties
});

async function insertInitialData() {
    try {
        const brandsCount = await Brand.countDocuments();
        if (brandsCount === 0) {
            await Brand.insertMany([
                {
                    name: 'visaBlack',
                    logo: './assets/images/visa-black.png',
                    published: true,
                },
                {
                    name: 'tymeBank',
                    logo: './assets/images/tyme-bank-black.png',
                    published: true,
                },
            ]);
            console.log('Data inserted');
        } else {
            console.log('Data already exists');
        }
    } catch (err) {
        console.error('Error inserting data:', err);
    }
}
app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend URL
  }));
  
// Retrieve brands with filtering and sorting
app.get('/brands', async (req, res) => {
    let sortField = 'name';
    let sortDirection = 1;

    if (req.query.sort && req.query.direction) {
        sortField = req.query.sort;
        sortDirection = req.query.direction === 'asc' ? 1 : -1;
    }

    try {
        const brands = await Brand.find({ published: true }).sort({ [sortField]: sortDirection });


        return res.status(200).json({
            brands,
        });
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch brands', error: err });
    }
});
