import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Home } from './features/home/Home';
import { usePermission } from './hooks/usePermissions';
import { usePosition } from './hooks/usePosition';
import { getWeather, setPosition } from './features/home/homeSlice';
import { useDependency } from './services/ioc/useDependency';
import { IHttpClient, IHttpClientType } from './services/http/HttpClient';

function App() {
  usePermission('geolocation');
  const dispatch = useDispatch();
  const position = usePosition();
  const httpClient = useDependency<IHttpClient>(IHttpClientType)
  
  useEffect(() => {
    dispatch(setPosition(position))
    if (position) {
      dispatch(getWeather(position, httpClient))
    }
  }, [position, httpClient, dispatch]);

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
