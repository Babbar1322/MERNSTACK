const mongoose = require('mongoose');

const DB = process.env.DATABASE;


mongoose.connect(DB).then(() => {
    console.log('Connected With DataBase');
}).catch((err) => console.warn('Something went wrong!'));