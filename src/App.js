import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Quiz from './components/Quiz';
import TakeQuiz from './components/TakeQuiz';
import DaffQuiz from './components/DaffQuiz';

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
          <Route path='/take' >
            <TakeQuiz />
          </Route>
          <Route path='/daff' >
            <DaffQuiz />
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
