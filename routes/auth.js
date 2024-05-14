const express = require('express');
const passport = require('passport');
const { registerUser, loginUser, logoutUser } = require('../controllers/authController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/logout', logoutUser);

// OAuth routes for Google, Facebook, Twitter, GitHub will be added here
// Route to initiate Google authentication
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Google authentication callback route
router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect home or to the desired route
    res.redirect('/');
  }
);

// Facebook authentication
router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));
router.get('/facebook/callback', 
  passport.authenticate('facebook', { failureRedirect: '/login' }),
  (req, res) => res.redirect('/')
);

// GitHub authentication
router.get('/github', passport.authenticate('github', { scope: ['user:email'] }));
router.get('/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  (req, res) => res.redirect('/')
);

// Twitter authentication
router.get('/twitter', passport.authenticate('twitter'));
router.get('/twitter/callback', 
  passport.authenticate('twitter', { failureRedirect: '/login' }),
  (req, res) => res.redirect('/')
);

module.exports = router;
