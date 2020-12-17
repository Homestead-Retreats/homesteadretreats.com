import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Screens/Homepage/Homepage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route to="/">
          <Homepage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
