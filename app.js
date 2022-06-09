const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config({path: './config.env'});

require('./data/connect');
// const User = require('./data/userSchema');

app.use(express.json());

app.use(require('./router/auth'));

const PORT = process.env.PORT || 4000;

//Middleware
// const middleware = (req, res, next) => {
//     console.log('Middleware');
//     next();
// }

// app.get('/login', (req, res) => {
//     res.send(`Login Page`)
// })

// app.get('/about', (req, res) => {
//     res.send(`About Page`)
// })

if(process.env.NODE_ENV == 'production'){
    app.use(express.static('web/build'));
}

app.listen(PORT, () => {
    console.log('Server Working on ', PORT);
})