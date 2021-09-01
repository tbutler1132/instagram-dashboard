import './App.css';
import Nav from './components/Nav';
import DashboardContainer from './components/DashboardContainer';
import { useState } from 'react';
import Instagram from './components/Instagram';
import { FacebookProvider, LoginButton } from 'react-facebook';
import SelectPage from './components/SelectPage';


import {Switch, Route, useHistory} from 'react-router-dom'
import Login from './components/Login'; 

function App() {
  const [token, setToken] = useState('')
  const [pageId, setPageId] = useState('')
  const history = useHistory()

  console.log(pageId)

  const handleResponse = (data) => {
    console.log(data)
    setToken(data.tokenDetail?.accessToken)
    history.push('/pages')
  }

  const pageHandler = (id) => {
    setPageId(id)
    history.push('/dashboard')
  }
 
  const handleError = (error) => {
    console.log({ error });
  }

  return (
      <div className="App">
          <Switch>
            <Route path="/login">
              <div className="login-container">
                <FacebookProvider appId="1153580595131093">
                  <LoginButton
                    scope="email, instagram_basic, pages_show_list"
                    onCompleted={handleResponse}
                    onError={handleError}
                    className="login-button"
                  >
                  <span>Login via Facebook</span>
                  </LoginButton>
                </FacebookProvider>
              </div>
            </Route>
            <Route path="/pages">
              <SelectPage token={token} pageHandler={pageHandler}/>
            </Route>
            <Route path="/instagram">
                <Instagram token={token} />
            </Route>
            <Route path="/dashboard">
              <div className="home">
                <div className="nav">
                  <Nav pageId={pageId} token={token} campaigns={""}/>
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
