import './App.css';
import Nav from './components/Nav';
import DashboardContainer from './components/CampaignContainer';


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/Login';

function App() {
  return (
    <Router>
    <div className="App">
      <div className="home">
        <div className="nav">
        </div>
        <Switch>
          <Route path="/dashboard">
          <Nav campaigns={""}/>
            <div className="dashboard-container">
              <DashboardContainer campaigns={""}/>
            </div>
          </Route>
          <Route path="/login">
            <div >
              <Login />
            </div>
          </Route>
        </Switch>
      </div>
    </div>
    </Router> 
  );
}

export default App;
