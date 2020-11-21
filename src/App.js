import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path='/' render={props => <Home {...props} />}>
          </Route>
          <Route path='/login' >
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
