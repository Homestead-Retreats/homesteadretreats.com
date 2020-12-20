import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './Screens/AboutUs/AboutUs';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route to="/">
          <AboutUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
