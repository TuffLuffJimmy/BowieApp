import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxShadow: "none",
    border: "5px solid rgba(152, 67, 255, 0.3)",
    borderRadius: 10,
    backgroundImage: "url('https://wallpaperaccess.com/full/1713248.jpg')",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundColor: "rgba(255, 0, 170, 0.3)"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
    color: 'Orange',
  },
  home: {
    textDecoration: 'none',
    color: 'White',
  },
  git: {
    textDecoration: 'none',
    borderRadius: 10,
    color: "rgba(255, 255, 255)",
    backgroundImage: "url('https://i.imgur.com/y6RHK0I.png')",
    backgroundPosition: "center center",
    backgroundSize: "cover",
  }
}))

const Navbar = () => {
  const classes = useStyles()
  return (
    <div className={classes.link}>
      <AppBar className={classes.root} position="sticky">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" className={classes.title}>
            <Link to="https://github.com/TuffLuffJimmy/BowieApp" target="_blank" className={classes.git}>
              ________________
            </Link>
          </Typography>
          <Link to="/" className={classes.home}>
            <Button color="inherit">Home</Button>
          </Link>
          <Link to="/saved" className={classes.link}>
            <Button color="inherit" >Saved Playlist</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
