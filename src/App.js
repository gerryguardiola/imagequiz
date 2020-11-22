import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Quiz from './components/Quiz';

function App() {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path='/' render={props => <Home {...props} />}>
          </Route>
          <Route path='/login' >
            <Login />
          </Route>
          <Route path='/quiz' >
            <Quiz />
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
