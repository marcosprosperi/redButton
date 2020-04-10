import React, { useState } from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { Input, Button } from 'antd'
import styles from "./Form.module.css"
import Drawer from '../Drawer/Drawer'

const Form = (props) => {

  const [code, setCode] = useState(props.location.state.code)
  const [name, setName] = useState('')

  const history = useHistory()

  const handleJoinGame = async () => {
    const avatarFile = avatar.getSaveData()
    console.log('avatar file: ', avatarFile)
    if(code.length === 4 && name && avatarFile) {
      try {
        const {data} = await axios.post('http://localhost:3001/api/redbutton/join', { 
          "code": code,
          "playerName": name,
          "avatar": avatarFile
       })
       console.log(data)
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
        <Input placeholder="Enter Lobby Code" value={code} onChange={x => setCode(x.target.value.length <= 4 ? x.target.value : code)} />
        <div className={styles.avatar}>
          <label>Your Avatar:</label>
          <Drawer avatar={avatar} setAvatar={setAvatar} />
        </div>
        <Button className={styles.submit} onClick={() => handleJoinGame()} block>Join</Button>
      </div>
    )
  }


  export default Form