import './App.css';
import Nav from './components/Nav';
import DashboardContainer from './components/DashboardContainer';
import { useState, useEffect } from 'react';
import { FacebookProvider, LoginButton } from 'react-facebook';
import SelectPage from './components/SelectPage';
import {Switch, Route, useHistory, Redirect} from 'react-router-dom'
import axios from 'axios';


function App() {
  const [token, setToken] = useState('')
  const [pageId, setPageId] = useState('')
  const [instagramId, setInstagramId] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const history = useHistory()

  useEffect(() => {

    const storedToken = localStorage.getItem('token')
    const storedPageId = localStorage.getItem('pageId')
    const storedInstagramId = localStorage.getItem('instagramId')

    if(storedToken){
      setToken(storedToken)
      setPageId(storedPageId)
      setInstagramId(storedInstagramId)
      setLoggedIn(true)
    }
  }, [setToken, setPageId, setInstagramId, setLoggedIn])


  const handleResponse = (data) => {
    const accessToken = data.tokenDetail?.accessToken
    setToken(accessToken)
    localStorage.setItem('token', accessToken)
    setLoggedIn(true)
    history.push('/pages')
  }

  const handleError = (error) => {
    console.log({ error });
  }

  const pageHandler = async (id) => {
    setPageId(id)
    localStorage.setItem('pageId', id)
    history.push('/dashboard')
    const instaAccount = await axios.get(`https://graph.facebook.com/v11.0/${id}?access_token=${token}&fields=instagram_business_account`)
    localStorage.setItem('instagramId', instaAccount.data.instagram_business_account.id)
    setInstagramId(instaAccount.data.instagram_business_account.id)
  }

  const logoutHandler = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('pageId')
    localStorage.removeItem('instagramId')
    setToken('')
    setPageId('')
    setInstagramId('')
    setLoggedIn(false)
    history.push('/login')
  }

  return (
      <div className="App">
          <Switch>
            <Route path="/login">
              {loggedIn ? <Redirect to="/dashboard" /> :
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
              }
            </Route>
            {token ? 
              <Route path="/pages">
                <SelectPage token={token} pageHandler={pageHandler}/>
              </Route>
            : null}
            {token ? 
            <Route path="/dashboard">
              <div className="home">
                <div className="nav">
                  <Nav instagramId={instagramId} token={token} logoutHandler={logoutHandler}/>
                </div>
                <div className="dashboard-container">
                  <DashboardContainer instagramId={instagramId} token={token} campaigns={""}/>
                </div>
              </div>
            </Route>
            : null}
          </Switch>
      </div>
  );
}

export default App;
