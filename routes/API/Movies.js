const express = require('express')
const router = express.Router()

const moviesCtrl = require('../../controllers/API/Movies')

router.get('/', moviesCtrl.index)
router.get('/:id', moviesCtrl.show)
router.post('/', moviesCtrl.create)
router.put('/:id', moviesCtrl.update)
router.delete('/:id', moviesCtrl.delete)

module.exports = router