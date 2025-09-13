const mongoose = require('mongoose');

async function connectDataBase(url){
   return mongoose.connect(url);
}

module.exports = {connectDataBase};