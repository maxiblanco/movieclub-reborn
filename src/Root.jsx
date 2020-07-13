import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import {MovieProvider} from '/context/movieContext.js';
import {ThemeProvider} from './theme';

const Root = () => {
  return (
    <ThemeProvider>
      <MovieProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={App} />
          </Switch>
        </BrowserRouter>
      </MovieProvider>
    </ThemeProvider>
  );
};

export default Root;
