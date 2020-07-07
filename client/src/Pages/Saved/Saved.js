import React, { useState, useEffect } from 'react'
import { useForkRef } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import CardHeader from '@material-ui/core/CardHeader'
import axios from 'axios'

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
  },
  media: {
    height: 250,
    width: 250,
  },
})

const Saved = () => {
  const classes = useStyles()
  const [songState, setSongState] = useState({
    songs: [],
  })

  songState.handleDeleteSong = (song) => {
    axios.delete(`/api/songs/${song._id}`)
      .then(() => {
        const songs = JSON.parse(JSON.stringify(songState.songs))
        const songsFiltered = songs.filter(volume => volume.id !== song.id)
        setSongState({ ...songState, songs: songsFiltered })
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    axios
      .get('/api/songs')
      .then(({ data }) => {
        setSongState({ ...songState, songs: data })
      })
      .catch((err) => console.error(err))
  })

  return (
    <div>
      {songState.songs.map((song) => (
        <Card className={classes.root}>
          <CardHeader title={song.title} />
          <CardMedia
            className={classes.media}
            image={song.album_art}
            title={song.artist}
          />
          <CardContent>{song.album}</CardContent>
          <CardContent>
            <audio src={
              song.preview
            } controls />
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="secondary"
              onClick={() => songState.handleDeleteSong(song)}
            >
              Delete
						</Button>
            <Button href={song.link}>Visit</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  )
}

export default Saved
