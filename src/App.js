import React from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Drawer from '../src/Components/Drawer/Drawer'

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/marcosprosperi">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const App = () => {
  const classes = useStyles()

  return (
    <Container component="main" maxWidth="xs">
      <Drawer />
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} > New Game </Button>
        </form>
      </div>
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <TextField variant="outlined" margin="normal" required fullWidth id="code-game" label="Code" name="code" autoComplete="code" autoFocus />
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} > Join </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}

export default App;
/*
function App() {
 
  
  const [name, setName] = useState()
  const [data, setData] = useState({})

  const handleChange = ({ target }) => {
    setName(target.value)
    console.log(name)
 }
  
  const pusher = new Pusher('a51cab9aff9db0953aa8', {
    cluster: 'us2',
    forceTLS: false
  })

  let channel = pusher.subscribe('my-channel')

  channel.bind('client-a51cab9aff9db0953aa8-my-event', function(data) {
    setData(data)
  })

  Pusher.logToConsole = true

  
  const save_name = () => {
    channel.bind('pusher:subscription_succeeded', function() {
      var triggered = channel.trigger('client-a51cab9aff9db0953aa8-my-event', { "name": name })
      console.log(triggered)
    });
    
  } 

  return (

    <Container fixed>

    </Container>
  )
}

export default App
*/