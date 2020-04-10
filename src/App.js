import React, {useState, useEffect} from 'react'
import { Icon, Input,Row, Col, Button } from 'antd'
import Pusher from 'pusher-js'
import { message } from 'antd'
import 'antd/dist/antd.css'
import axios from 'axios'
import styles from './App.module.css' 
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Home from './views/Home/Home'
import Join from './views/Join/Join'
import Lobby from './views/Lobby/Lobby'

const App = props => {
  /*
  useEffect(() => {
    const pusher = new Pusher('a51cab9aff9db0953aa8', {
      cluster: 'us2',
      forceTLS: false,
      authEndpoint: 'http://localhost:3000/pusher/auth'
    })
    Pusher.logToConsole = true
    const channel = pusher.subscribe('private-channel-manco')
    
    channel.bind('uulT-join', function(info) {
      console.log(info)
      message.success(`${info.playerName} joined the game`)    
    })

    channel.bind('uulT-lock', function(info) {
      message.success(`${info.playerName} joined the game`)    
    })

    channel.bind('uulT-push', function(info) {
      message.success(`${info.playerName} joined the game`)    
    })
        
  }, [])
  
  const [name, setName] = useState()
  const [code, setCode] = useState()
  const [data, setData] = useState()



  const join = () => {
    if(name && code.length === 4) {
      axios.post('http://localhost:3000/api/redbutton/join', { 
        "code":code,
        "playerName":name,
        "avatar": ""
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
    }

  }

  */

  


  return (
    <div className={styles.App}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/join" component={Join} />
          <Route path="/lobby" component={Lobby} />
        </Switch>
      </Router>
    </div>  
  )
}

export default App
