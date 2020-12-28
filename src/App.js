import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import AboutUs from './Screens/AboutUs/AboutUs';
import RentalInfo from './Screens/Rental/Rental';



function App(props) {
  return (
    <div className="App">
      <Layout>

        <Switch>

          <Route exact path="/">
            <AboutUs />
          </Route>

          <Route path="/rental">
            <RentalInfo />
          </Route>

        </Switch>

      </Layout>
    </div>
  );
}

export default App;
