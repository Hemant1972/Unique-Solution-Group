const express = require('express');
const router = express.Router();
const { submitContact, getInquiries } = require('../controllers/contactController');
const authMiddleware = require('../middleware/authMiddleware'); // We'll create this next

router.post('/', submitContact);
router.get('/', authMiddleware, getInquiries); // Protected route for admin

module.exports = router;