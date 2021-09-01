import './App.css';
import Nav from './components/Nav';
import DashboardContainer from './components/DashboardContainer';
import { useState } from 'react';
import Instagram from './components/Instagram';


import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'; 

function App() {
  const [token, setToken] = useState('')

  const loginHandler = (token) => {
    setToken(token)
  }

  return (

      <div className="App">


          <Switch>
            <Route path="/login">
                <Login setToken={loginHandler}/>
            </Route>
            <Route path="/instagram">
                <Instagram token={token} />
            </Route>
            <Route path="/dashboard">
              <div className="home">
                <div className="nav">
                  <Nav token={token} campaigns={""}/>
                </div>
                <div className="dashboard-container">
                  <DashboardContainer token={token} campaigns={""}/>
                </div>
              </div>
            </Route>
          </Switch>

      </div>

  );
}

export default App;
