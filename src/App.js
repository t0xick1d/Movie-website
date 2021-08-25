import './App.css';
import Navibar from './Component/Navibar/Navibar';
import LogIn from './Component/Login/LogIn'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import HomePage from './Pages/HomePage/HomePage';

function App() {
  
  return (
    <div className='AppHeader'>
      <Router>
        <LogIn/>
        <Navibar/>
        <Switch>
          <Route path="" 
            render= { () => <HomePage/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
