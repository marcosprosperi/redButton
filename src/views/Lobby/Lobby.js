import React, { useState, useEffect, useRef } from 'react'
import Profile from '../../Components/Profile/Profile'
import Drawer from '../../Components/Drawer/Drawer'
import Pusher from 'pusher-js'
import axios from 'axios'
import { Button } from 'antd'
import styles from './Lobby.module.css'
import { URL_API_DEV, URL_API_PROD } from '../../constants/Variables'

const Lobby = (props) => {

  const [you] = useState(props.location.state.players[props.location.state.players.length - 1])
  const [avatar, setAvatar] = useState('')
  const [players, setPlayers] = useState(props.location.state.players)
  const [code] = useState(props.location.state.code)
  const drawerRef = useRef(null)
  
  useEffect(() => {
    const pusher = new Pusher('a51cab9aff9db0953aa8', {
      cluster: 'us2',
      forceTLS: true,
      authEndpoint: `${URL_API_PROD}pusher/auth`
    })

    Pusher.logToConsole = true
    const channel = pusher.subscribe('private-channel-manco')
    
    channel.bind(`${code}-join`, function(info) {
      if(info) {
        setPlayers(p => [...p, info])  
      }
    })

    channel.bind(`${code}-lock`, function(info) {
      console.log('cuando llega un mensaje...', info)
      if(info) {
        setPlayers(p => p.map((player) => {
          if (player.id === info.id) {
            return Object.assign({}, player, {
              avatar: info.avatar,
              locked: info.locked,
            })
          } else {
            return player
          }
        }))
      }
    })

    channel.bind(`${code}-push`, function(info) {
      //message.success(`${info.playerName} joined the game`)    
    })
       
  }, [code])



  const handleLockGame = async () => {
    console.log('drawerRef: ', drawerRef)
    const avatarFile = drawerRef.current.getAvatarString()
    
    if(code.length === 4 && avatarFile) {
      try {
        const {data} = await axios.post(`${URL_API_PROD}api/redbutton/lock`, { 
          "code": code,
          "id": you.id,
          "avatar": avatarFile
        })
      } catch (error) {
        console.log('error en el join: ', error)
      }
    }
  }


    return (
      <div className={styles.lobby}>
        <div>
          <h1>CODE: {code}</h1>
          <h3>{players.filter(x => x.locked).length} / {players.length}</h3>
        </div>
        <div className={styles.playerList}>
            {players.map((x,y) => <div key={y} className={styles.player}><Profile avatar={x.avatar} isLocked={x.locked} name={x.playerName} /></div>)}
        </div>
        <div className={styles.yourAvatar}>
          <div>
            <label>Your Avatar:</label>
            <Drawer ref={drawerRef} avatar={avatar} setAvatar={setAvatar} />
            <Button className={styles.submit} onClick={handleLockGame} block>Lock</Button>
          </div>
        </div>
      </div>
    )
}


export default Lobby



