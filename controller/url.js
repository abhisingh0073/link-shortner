const {nanoid} = require('nanoid');
const URL = require('../models/url');



async function createShortUrl(req, res){
    const shortId = nanoid(8);
    const data = req.body;

    const allUrl = await URL.find({});

    if(!data.url){
        // return res.status(400).json({error: "url is required"});
        // return res.render('home', {urls: allUrl, index:0})
        res.redirect('/');
    }

    await URL.create({
        shortId: shortId,
        redirectUrl: data.url,
        visitHistory: [],
    });

    
    // return res.render("home", {
    //     id: shortId,
    // });

    return res.render('home', {id: shortId, urls: allUrl, index:0});
}



module.exports = {createShortUrl};