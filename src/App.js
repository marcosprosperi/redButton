import React, {useState, useEffect} from 'react'
import 'antd/dist/antd.css'
import styles from './App.module.css' 
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Home from './views/Home/Home'
import Join from './views/Join/Join'
import Lobby from './views/Lobby/Lobby'

const App = props => {

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
