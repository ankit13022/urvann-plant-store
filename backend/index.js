require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const plantRoutes = require('./routes/plants');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {})
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => {
        console.error("MongoDB connection error:", err.message);
        process.exit(1);
    });

app.use('/plants', plantRoutes);

app.get('/', (req, res) => res.send("Plant Store API running..."));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
