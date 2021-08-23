import logo from './logo.svg';
import './App.css';
import Navibar from './Component/Navibar/Navibar';
import LogIn from './Component/Login/LogIn'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  
  return (
    <div className='App'>

      <header className="AppHeader">
      <Router>
        <LogIn/>
        <Navibar/>
        <Switch>
          
          
        </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
