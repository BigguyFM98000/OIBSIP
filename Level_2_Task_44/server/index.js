const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');
const cors = require('cors');

dotenv.config();
const app = express();
const port = 5500;

// Middleware
app.use(bodyParser.json());
// app.use(express.static('views'));
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  }).then(() => {
    console.log('Connected to MongoDB instance');
}).catch((err) => {
    console.log(err.message);
});

app.get('/', (req, res) => {
    res.json({message: "Welcome to my Pairsoft Server" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});