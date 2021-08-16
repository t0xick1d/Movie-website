import logo from './logo.svg';
import './App.css';
import Navibar from './Component/Navibar/Navibar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className='App'>

      <header className="AppHeader">
      <Router>
        <Navibar/>
        <Switch>
          
          
        </Switch>
        </Router>
        
        <img src={logo} className="AppLogo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>HelloWorld</h1>
        <a
          className="AppLink"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
