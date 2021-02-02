const express = require('express');
const dotenv = require('dotenv');
const logger = require('morgan');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

app.use(express.json());

// Route files
const index = require('./routes/index');
const auth = require('./routes/auth');

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(logger('dev'));
}  
// Mount routers
app.use('/api', index);
app.use('/api/auth', auth);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode at http://localhost:${PORT}`)
);


