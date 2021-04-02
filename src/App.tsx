import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Home } from './features/home/Home';
import { Forecast } from './features/forecast/Forecast';
import { usePermission } from './hooks/usePermissions';
import { usePosition } from './hooks/usePosition';
import { getWeather, setPosition } from './features/home/homeSlice';
import { useDependency } from './services/ioc/useDependency';
import { IHttpClient, IHttpClientType } from './services/http/HttpClient';
import { AnimatePresence } from 'framer-motion';

function App() {
  const permission = usePermission('geolocation');
  const dispatch = useDispatch();
  const position = usePosition();
  const httpClient = useDependency<IHttpClient>(IHttpClientType);

  useEffect(() => {
    dispatch(setPosition(position));
    if (position) {
      dispatch(getWeather(position, httpClient));
    }
  }, [position, httpClient, dispatch, permission]);

  return (
    <AnimatePresence>
      <Router>
        <Switch>
          <Route path='/forecast'>
            <Forecast />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
          <Redirect to='/' />
        </Switch>
      </Router>
    </AnimatePresence>
  );
}

export default App;
