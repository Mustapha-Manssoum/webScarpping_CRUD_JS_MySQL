const express = require('express');
const router = express.Router();
const db = require('../db');
const service = require('../services/movie.service');

router.get('/', async (req, res) => {
    const movies = await service.getAllMovies()
    res.send(generateHTML(movies))
});

router.get('/title/:title', async (req, res) => {
    const movie = await service.getMovieByTitle(req.params.title)
    if (movie.length == 0)
        res.status(404).json(`No movie with title ${req.params.title}`)
    else
        res.send(movie)
});

router.get('/year/:year', async (req, res) => {
    const movies = await service.getMoviesByYear(req.params.year)
    if (movies.length == 0)
        res.status(404).json(`No movies were released in ${req.params.year}`)
    else
        res.send(movies)
});

router.delete('/:title', async (req, res) => {
    const affectedRows = await service.deleteMovieByTitle(req.params.title)
    if (affectedRows == 0)
        res.status(404).json(`No movie with the title ${req.params.title}`)
    else
        res.send("Deleted Successfully") 
});

router.post('/', async (req, res) => {
    const movieData = req.body;

    // if (!movieData || !movieData.year || !movieData.title || !movieData.role || !movieData.notes || !movieData.refs) {
    //     console.log(req.body)
    //     return res.status(400).send("Incomplete movie data. Please provide all required fields.");
    // }

    await service.addMovie(req.body)
    res.status(201).send("Movie added successfully !")
});

router.put('/:title', async (req, res) => {
    await service.updateMovie(req.params.title, req.body)
    res.status(201).send("Movie Updated successfully !")
})

function generateHTML(data) {
    let html = '<html><head><title>SRK Movies List</title></head><body>';
    html += '<h1>SRK Movies List</h1>';
    html += '<table border="1"><tr><th>Year</th><th>Title</th><th>Role</th></tr>';
    data.forEach(row => {
        html += `<tr><td>${row.year}</td><td>${row.title}</td><td>${row.role}</td></tr>`;
    });
    html += '</table></body></html>';
    return html;
}

module.exports = router