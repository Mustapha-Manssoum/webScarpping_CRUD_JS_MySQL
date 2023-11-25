const express = require('express');
const app = express();
require('express-async-errors');
const bodyparser = require('body-parser');
// require('express-async-errors');

const port = 3000;
const db = require('./db');
const movieRoutes = require('./controllers/movie.controller');

// middleware
app.use(bodyparser.json())  // convert the body into json format
app.use('/api/movies', movieRoutes)

app.use((err, req, res, next) => {
    console.log(err)
    res.status(err.status || 500).send('Server error !')
} )

db.query('SELECT 1')
    .then(() => {
        console.log('DB connection succeded') ;
        app.listen(port, () => console.log(`Server running on port ${port}`));
    }
    )
    .catch(err => console.log('DB connection failed. \n' + err));
