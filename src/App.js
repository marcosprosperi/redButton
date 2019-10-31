import React, {useState, useEffect} from 'react'
//import Drawer from '../src/Components/Drawer/Drawer'
import Pusher from 'pusher-js';
import { message } from 'antd';
import 'antd/dist/antd.css';
import './index.css';


function App() {
 
  useEffect(() => {
    const pusher = new Pusher('a51cab9aff9db0953aa8', {
      cluster: 'us2',
      forceTLS: false
    })
    Pusher.logToConsole = true
    const channel = pusher.subscribe('my-channel')
    channel.bind('client-a51cab9aff9db0953aa8-pqxf', function(info) {
      setData(info)
      console.log(info)
      message.success(`${info.playerName} joined the game`)
    })
  }, [])
  
  const [name, setName] = useState()
  const [data, setData] = useState()

  const handleChange = ({ target }) => {
    setName(target.value)
    console.log(name)
 }
  

  

  


  return (

    <div>ready</div>
  )
}

export default App
