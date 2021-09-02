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
  const history = useHistory()

  useEffect(() => {
    const storedToken = localStorage.getItem('token')
    const instagramId = localStorage.getItem('instagramId')

    if(instagramId){
      setToken(storedToken)
      setInstagramId(instagramId)
    }

    if(pageId){
      const getData = async () => {
        const instaAccount = await axios.get(`https://graph.facebook.com/v11.0/${pageId}?access_token=${token}&fields=instagram_business_account`)
        localStorage.setItem('instagramId', instaAccount.data.instagram_business_account.id)
        setInstagramId(instaAccount.data.instagram_business_account.id)
      }
      getData()
    }
  })


  const handleResponse = (data) => {
    setToken(data.tokenDetail?.accessToken)
    localStorage.setItem('token', data.tokenDetail?.accessToken)
    history.push('/pages')
  }

  const pageHandler = (id) => {
    setPageId(id)
    history.push('/dashboard')
  }
 
  const handleError = (error) => {
    console.log({ error });
  }

  if(instagramId) return(<Redirect to="/dashboard"></Redirect>)
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
            <Route path="/dashboard">
            {instagramId ? 
              <div className="home">
                <div className="nav">
                  <Nav instagramId={instagramId} token={token} campaigns={""}/>
                </div>
                <div className="dashboard-container">
                  <DashboardContainer instagramId={instagramId} token={token} campaigns={""}/>
                </div>
              </div>
              : 
              <div>Loading...</div>}
            </Route>
          </Switch>
      </div>
  );
}

export default App;
