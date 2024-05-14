const express = require('express');
const { ensureAuth, ensureAdmin } = require('../middleware/auth');
const { getUserProfile, editUserProfile, listPublicProfiles, getAllProfiles } = require('../controllers/userController');
const router = express.Router();

router.get('/me', ensureAuth, getUserProfile);
router.put('/me', ensureAuth, editUserProfile);
router.get('/public', listPublicProfiles);
router.get('/all', ensureAuth, ensureAdmin, getAllProfiles);

module.exports = router;
