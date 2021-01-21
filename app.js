const express = require('express');
const dotenv = require('dotenv');
const logger = require('morgan');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();
app.set('view engine', 'ejs');
// Route files
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(logger('dev'));
}  
// Mount routers
app.use('/api', indexRouter);
app.use('/api/users', usersRouter);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);


