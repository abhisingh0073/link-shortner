const express = require('express');
const URL = require('../models/url')

const router = express.Router();
router.get('/', async (req, res) => {
    const allUrl = await URL.find({});
    return res.render('home', {urls: allUrl, index:0});
})

module.exports = router;