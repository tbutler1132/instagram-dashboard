import './App.css';
import Nav from './components/Nav';
import DashboardContainer from './components/DashboardContainer';

function App() {
  return (
    <div className="App">
      <div className="home">
        <div className="nav">
          <Nav />
        </div>
        <div className="dashboard-container">
          <DashboardContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
