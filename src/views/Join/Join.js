import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { Input, Button } from 'antd'
import styles from "./Join.module.css"
import { URL_API_DEV, URL_API_PROD } from '../../constants/Variables'

const Join = (props) => {

  const [code, setCode] = useState((props.location.state || {} ).code)
  const [name, setName] = useState('')
  const history = useHistory()

  const handleJoinGame = async () => {
    if(code.length === 4 && name) {
      try {
        const {data} = await axios.post(`${URL_API_PROD}api/redbutton/join`, { 
          "code": code,
          "playerName": name
       })
       history.push({ pathname: "/lobby", state: { code: data.code, channel: data.channel, players: data.players }})
      } catch (error) {
        console.log('error en el join: ', error)
      }
    }
  }

  console.log(props)
    return (
      <div className={styles.divForm}>
        <label>Username:</label>
        <Input placeholder="Enter your username" onChange={(x) => setName(x.target.value)} />
        <label>Code:</label>
        <Input placeholder="Enter Lobby Code" maxLength={4} value={code} onChange={x => setCode((x.target.value).toUpperCase())} />
        <Button className={styles.submit} onClick={handleJoinGame} block>Join</Button>
      </div>
    )
  }


  export default Join