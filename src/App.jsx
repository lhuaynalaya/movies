import React, { Component } from 'react';
import { Provider } from 'react-redux';

import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
  Link } from 'react-router-dom';

import Full from './scenes/Full/Full';
import ReactGA from 'react-ga';
import store from './store';

import './styles.css';

class App extends Component {
  componentDidMount() {
    ReactGA.initialize('UA-119743567-1');
  }

  render() {

    return (
      <Provider store={ store }>
        <Router>
          <Switch>
            <Route path='/' name='Home' component={ Full } />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
