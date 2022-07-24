const express = require('express');
const router = express.Router();
const { setNewsletter } = require('../controllers/newsletterController');

router.route('/').post(setNewsletter);

module.exports = router;
