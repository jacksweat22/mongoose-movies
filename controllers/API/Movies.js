const Movie = require('../../models/movie')

const index = (req, res) => {
    Movie.find({}).then((movies) => {
        res.json(movies)
    })
}

const show =(req, res) =>{
    Movie.findById(req.params.id).populate('cast').then((movie) =>{ res.status(404).json(movie)

    })
}

module.exports = {
    index,
    show,
    
}