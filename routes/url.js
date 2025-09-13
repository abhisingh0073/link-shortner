const express = require('express');
const { createShortUrl } = require('../controller/url');



const router = express.Router();

router.post('/', createShortUrl);


module.exports = router;