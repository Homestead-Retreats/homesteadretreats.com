import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import AboutUs from './Screens/AboutUs/AboutUs';
import FaclilitesandFood from './Screens/FacilitesandFood/FaclilitesandFood';


function App(props) {
  return (
    <div className="App">
      <Layout>

        <Switch>

          <Route exact path="/">
            <AboutUs />
          </Route>

          <Route path="/facilities-food">
            <FaclilitesandFood />
          </Route>

        </Switch>

      </Layout>
    </div>
  );
}

export default App;
