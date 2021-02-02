var express = require('express');
var router = express.Router();

const { register } = require('../controllers/auth.controllers');

router.post('/register', register);

module.exports = router;
