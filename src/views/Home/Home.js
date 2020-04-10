import React, { useState } from "react"
import { Button } from "antd"
import styles from "./Home.module.css"
import axios from 'axios'
import { useHistory } from "react-router-dom";
import Profile from '../../Components/Profile/Profile'

const Home = () => {
  const [history] = useState(useHistory())

  const CreateNewGame = async () => {
    // TODO: AGREGAR UN LOADING
    try {
      const {data} = await axios.post('http://button-api.herokuapp.com/api/redbutton/create')
      history.push({ pathname: "/join", state: { code: data.code }})
    } catch (error) {
      console.log('error en el create: ', error)
    }
  }

  return (
    <div className={styles.home}>
        <div className={styles.selectorType}>
            <h3 className={styles.title}>SELECT OPTION</h3>
            <div className={styles.item}>
                <Button onClick={CreateNewGame} block>Create new game</Button>
            </div>
            <div>
                <Button onClick={() => history.push({ pathname: "/join"})} block>Join a game</Button>
            </div>
        </div>
    </div>
  )
}

export default Home
