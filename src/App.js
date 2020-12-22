import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import AboutUs from './Screens/AboutUs/AboutUs';


function App(props) {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route to="/">
            <AboutUs />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
