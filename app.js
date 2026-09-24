const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files (CSS, client-side JS)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to read form submissions & JSON bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
const indexRoutes = require('./routes/index');
const apiRoutes = require('./routes/api'); // <--- 1. ADD THIS LINE

app.use('/', indexRoutes);
app.use('/api', apiRoutes);                 // <--- 2. ADD THIS LINE

app.listen(PORT, () => {
  console.log(`Campus Eats running at http://localhost:${PORT}`);
});