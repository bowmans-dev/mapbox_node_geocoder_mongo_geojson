const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
 
// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

const app = express();

//body parser
app.use(express.json());

// Enable CORS
app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use('/api/v1/stores', require('./routes/stores'));

app.get('/api/v1/stores', (req, res) => {
  res.status(200).json({ success: true, msg: 'Show all stores' });
});

const  PORT  = process.env.PORT || 5000;

app.listen(PORT, () => console.log (`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));