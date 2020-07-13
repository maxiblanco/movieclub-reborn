import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import {MovieProvider} from '/context/movieContext.js';

const Root = () => {
  return (
    <MovieProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </BrowserRouter>
    </MovieProvider>
  );
};

export default Root;
