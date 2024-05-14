const express = require('express');
const connectDB = require('./config/db');
const passport = require('passport');
const session = require('express-session');
const dotenv = require('dotenv');

dotenv.config();
connectDB();

const app = express();

// Body parser
app.use(express.json());

// Sessions
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/user', require('./routes/user'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
