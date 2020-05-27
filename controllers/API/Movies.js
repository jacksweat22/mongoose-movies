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

const create = (req, res) => {
    Movie.create(req.body).then((movie) =>{
        res.status(202).json(movie)
    })
}

const update =(req,res) => {
    Movie.findByIdAndRemove(req.params.id).then((movie)=> {
        res.status(200).json(movie)
    })
}

module.exports = {
    index,
    show,
    create,
    update,

}