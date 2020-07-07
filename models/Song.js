const { model, Schema } = require('mongoose')

const songSchema = new Schema({
  id: String,
  title: String,
  artist: String,
  album: String,
  album_art: String,
  preview: String,
  link: String,
})

module.exports = model('Song', songSchema)