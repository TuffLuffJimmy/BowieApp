const router = require('express').Router()
const { Song } = require('../models')

router.get('/songs', (req, res) => {
  Song.find()
    .then(songs => res.json(songs))
    .catch((e) => console.error(e))
})

router.get('/songs/:id', (req, res) => {
  Song.find(req.params.id)
    .then()
    .catch(e => console.error(e))
})

router.post('/songs', (req, res) => {
  Song.create(req.body)
    .then(song => res.json(song))
    .catch(e => console.error(e))
})

router.put('/songs', (req, res) => { })

router.delete('/songs/:id', (req, res) => {
  Song.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(e => console.error(e))
})

module.exports = router
