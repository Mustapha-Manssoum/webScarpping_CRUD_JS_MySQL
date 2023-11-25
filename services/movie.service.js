const db = require('../db')

module.exports.getAllMovies = async () => {
    const [data] = await db.query("SELECT * FROM srk_movies.movies")
    return data
}

module.exports.getMovieByTitle = async(title) => {
    const [movie] = await db.query(`SELECT * FROM srk_movies.movies WHERE title = ?`, [title])
    return movie
}

module.exports.getMoviesByYear = async(year) => {
    const [movies] = await db.query("SELECT * FROM srk_movies.movies WHERE year = ?", [year])
    return movies
}

module.exports.deleteMovieByTitle = async(title) => {
    const [record] = await db.query("DELETE FROM srk_movies.movies WHERE title = ?", [title])
    return record.affectedRows
}

module.exports.addMovie = async(obj) => {
    const [record] = await db.query("INSERT INTO srk_movies.movies (year, title, role, notes, refs) VALUES (?, ?, ?, ?, ?)", [obj.year, obj.title, obj.role, obj.notes, obj.refs])
    return record
}

module.exports.updateMovie = async(title, obj) => {
    const [record] = await db.query("UPDATE srk_movies.movies SET notes = ?, refs = ? WHERE title = ?", [obj.notes, obj.refs, title])
    return record
}