var express = require('express');
const axios = require('axios'); 
var find = require('lodash.find');
var _ = require('lodash');
var router = express.Router();


let movies = [
	{
		id: "tt3896198",
		movie: "Guardians of the Galaxy Vol. 2",
		yearOfRelease: 2017,
		duration: 136, // en minutes,
  		actors: ['Chris Pratt', 'Zoe Saldana', 'Dave Bautista', 'Vin Diesel'],
		poster: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg", // lien vers une image d'affiche,
		boxOffice: 277969969, // en USD$,
		rottenTomatoesScore: 56

	},

	{

		id: "tt5817168",
		movie: "Inception",
		yearOfRelease: 2010,
		duration: 148, // en minutes,
		actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page', 'Tom Hardy'],
		poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg", // lien vers une image d'affiche,
		boxOffice: 292568851, // en USD$,
		rottenTomatoesScore: 79

	},

	{

		id: "tt0848228",
		movie: "The Avengers",
		yearOfRelease: 2012,
		duration: 143, // en minutes,
		actors: ['Robert Downey Jr.', 'Chris Evans', 'Mark Ruffalo', 'Chris Hemsworth'],
		poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg", // lien vers une image d'affiche,
		boxOffice: 623279547, // en USD$,
		rottenTomatoesScore: 92

	},
	
	{

		id: "tt0780504",
		movie: "Drive",
		yearOfRelease: 2011,
		duration: 100, // en minutes,
		actors: ['Ryan Gosling', 'Carey Mulligan', 'Bryan Cranston', 'Albert Brooks'],
		poster: "https://m.media-amazon.com/images/M/MV5BZjY5ZjQyMjMtMmEwOC00Nzc2LTllYTItMmU2MzJjNTg1NjY0XkEyXkFqcGdeQXVyNjQ1MTMzMDQ@._V1_SX300.jpg", // lien vers une image d'affiche,
		boxOffice: 34300000, // en USD$,
		rottenTomatoesScore: 92

	},

]


/* PUT movie by name. */
router.put('/',(req, res)=>{
	const { movie } = req.body;

	axios({

		method: 'put',
		url:'/movies',
		baseURL: 'http://www.omdbapi.com/'


	});





	const id = _.uniqueId();
	movies.push({ movie, id });
	res.json({
		message: 'Just added ${movie}',
		movie: 
		{
			id,
			movie, 
			yearOfRelease, 
			duration, 
			actors,
			poster,  
			boxOffice, 
			rottenTomatoesScore
		}
	})
})



/* GET movie by ID. */
router.get('/:id', (req, res)=>{

	const { id } = req.params;
	const movie = _.find(movies, ["id", id]);
	res.status(200).json({
		message: 'Movie found !',
		movie
	});

});

/* GET movies listing. */
router.get('/', function(req, res, next) {
	res.status(200).json({ movies });
});




module.exports = router;
