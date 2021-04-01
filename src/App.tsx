import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Home } from './features/home/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/forecast">
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
