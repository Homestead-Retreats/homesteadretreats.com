import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import AboutUs from './Screens/AboutUs/AboutUs';
import Facilites from './Screens/Facilites/Facilites';
import OnsiteRec from './Screens/OnsiteRec/OnsiteRec';
import Property from './Screens/Property/Property';
import RentalInfo from './Screens/Rental/Rental';



function App(props) {
  return (
    <div className="App">
      <Layout>
      
        <Switch>

          <Route exact path="/">
            <AboutUs />
          </Route>

          <Route path="/onsite-recreation">
            <OnsiteRec />
          </Route>

          <Route path="/property">
            <Property />
          </Route>

          <Route path="/rental">
            <RentalInfo />
          </Route>

          <Route path='/facilities-food'>
            <Facilites />
          </Route>

        </Switch>

      </Layout>
    </div>
  );
}

export default App;
