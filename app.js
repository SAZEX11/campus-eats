const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

// mongodb
const { connectMongo } = require('./config/mongo');

if (process.env.NODE_ENV !== 'test') {
  connectMongo().catch(err => console.error('MongoDB connection failed:', err));
}

const app = express();

// View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files (CSS, client-side JS)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to read form submissions & JSON bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// express session
const session = require('express-session');

app.use(session({
  secret: process.env.SESSION_SECRET || 'campus-eats-dev-secret',
  resave: false,
  saveUninitialized: false,
}));

// Make the logged-in user available to every view, without passing it manually every time
app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  next();
});

// Routes
const indexRoutes = require('./routes/index');
const apiRoutes = require('./routes/api');

app.use('/', indexRoutes);
app.use('/api', apiRoutes);

module.exports = app;