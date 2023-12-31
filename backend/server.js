const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
app.use(bodyParser.json());

app.use(cors());

mongoose.connect("mongodb+srv://vercel-admin-user:VLL460oyc9GSJCOU@cluster0.mdn5lnp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    .then(() => {
        console.log('Connected to MongoDB');

        app.listen(3001, () => {
            console.log('Server is running on port 3001');
        });

        insertInitialData();
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

const Brand = mongoose.model('Brand', {
    name: String,
    logo: String,
    published: Boolean,
});

async function insertInitialData() {
    try {
        const brandsCount = await Brand.countDocuments();
        if (brandsCount === 0) {
            await Brand.insertMany([
                {
                    name: 'visa',
                    logo: 'https://i.imgur.com/BQYUoYl.png',
                    published: true,
                },
                {
                    name: 'tyme',
                    logo: 'https://i.imgur.com/5fufAQt.png',
                    published: true,
                },
                {
                    name: 'liquid',
                    logo: 'https://i.imgur.com/JToptvL.png',
                    published: true,
                },
                {
                    name: 'tgf',
                    logo: 'https://i.imgur.com/erH3LL3.png',
                    published: true,
                },
                {
                    name: 'santam',
                    logo: 'https://i.imgur.com/Atcoqc8.png',
                    published: true,
                },
                {
                    name: 'bbc',
                    logo: 'https://i.imgur.com/iVOJ92G.png',
                    published: true,
                },
                {
                    name: 'pnp',
                    logo: 'https://i.imgur.com/DAmuUvE.png',
                    published: true,
                },
                {
                    name: 'multichoce',
                    logo: 'https://i.imgur.com/yn7t7j7.png',
                    published: true,
                },
                {
                    name: 'wesgrow',
                    logo: 'https://i.imgur.com/7qdVW30.png',
                    published: true,
                },
                {
                    name: 'nike',
                    logo: 'https://i.imgur.com/BCk2s5w.png',
                    published: true,
                },
                {
                    name: 'engen',
                    logo: 'https://i.imgur.com/ZC68IVq.png',
                    published: true,
                },
                {
                    name: 'microsoft',
                    logo: 'https://i.imgur.com/PT2GoOB.png',
                    published: true,
                },
                {
                    name: 'spotify',
                    logo: 'https://i.imgur.com/ydEnLN8.png',
                    published: true,
                },
                {
                    name: 'distell',
                    logo: 'https://i.imgur.com/MbDmzPQ.png',
                    published: true,
                },
                {
                    name: 'sanlam',
                    logo: 'https://i.imgur.com/OvullUc.png',
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

// Allow requests from the specified origins
const allowedOrigins = [
    'https://accenture-song-project-frontend-bp4z7x4zd-nkebenyane.vercel.app',
    'http://localhost:3000',
  ];
  
  const corsOptions = {
    origin: function (origin, callback) {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  };
  
  app.use(cors(corsOptions));

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
