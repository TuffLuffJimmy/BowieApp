import React, { useState } from 'react'
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
  search: {
    border: "5px solid rgba(152, 67, 255, 0.2)",
    borderRadius: 10,
    backgroundSize: "cover",
    backgroundColor: "white",
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white'
  },
  btn: {
    backgroundColor: "black",
    color: 'white'
  }
})

const Home = () => {
  const classes = useStyles()
  const [songState, setSongState] = useState({
    search: '',
    songs: [],
  })

  songState.handleInputChange = (event) => {
    setSongState({ ...songState, [event.target.name]: event.target.value })
  }

  songState.handleSearchSong = (event) => {
    event.preventDefault()
    axios
      .get(`/api/deez/${songState.search}`)
      .then(({ data }) => {
        console.log(data)
        setSongState({ ...songState, songs: data })
      })
      .catch((e) => console.error(e))
  }

  songState.handleSaveSong = (song) => {
    // COME BACK TO THIS
    axios.post('/api/songs', {
      id: song.id,
      title: song.title,
      artist: song.artist.name,
      album: song.album.name,
      album_art: song.album.cover_medium,
      preview: song.preview,
      link: song.link
    })
      .then(() => {
        const songs = songState.songs
        const songsFiltered = songs.filter(volume => volume.id !== song.id)
        setSongState({ ...songState, songs: songsFiltered })
      })
      .catch(e => console.log(e))
  }
  return (
    <>
      <form onSubmit={songState.handleSearchSong}>
        <TextField className={classes.search}
          label="Let's find a song"
          variant="outlined"
          name="search"
          value={songState.search}
          onChange={songState.handleInputChange}
        />
        <Button className={classes.btn}
          variant="outlined"
          color="primary"
          onClick={songState.handleSearchSong}
        >
          Search
				</Button>
      </form>
      <div>
        {songState.songs.map((song) => (
          <Card className={classes.root}>
            <CardHeader title={song.title} />
            <CardMedia
              className={classes.media}
              image={song.album.cover_medium}
              title={song.album.title}
            />
            <CardContent>{song.artist.name}</CardContent>
            <CardContent>{song.album.title}</CardContent>
            <CardContent>
              <audio src={
                song.preview
              } controls />
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="primary"
                onClick={() => songState.handleSaveSong(song)}
              >
                Save
							</Button>
              <Button href={song.link}>Visit</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </>
  )
}

export default Home
