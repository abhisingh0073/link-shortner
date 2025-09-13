const express = require('express');
const path = require('path');
const { connectDataBase } = require('./connection');
const URL = require('./models/url');
const urlRoutes = require('./routes/url');
const staticRouter = require('./routes/staticRouter')


const app = express();
const PORT = 3000;

connectDataBase('mongodb://localhost:27017/makingUrlShortner')
.then(() => console.log('server is connectec to database'));

app.set("view engine", "ejs");
app.set('views', path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/url', urlRoutes);
app.use('/', staticRouter);

app.get('/:shortId',async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        {shortId},{ $push: {
            visitHistory: { 
                timestamps: Date.now()
            }
        }
    });

    res.redirect(entry.redirectUrl);
})

app.listen(PORT, ()=>{console.log(`server is started at port: ${PORT}`)});


