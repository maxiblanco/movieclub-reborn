import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import SearchView from '/views/Search.jsx';
import { MovieProvider } from '/context/movieContext.js';
import ThemeProvider from './theme';

const Root = () => {
  return (
    <ThemeProvider>
      <MovieProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/search" component={SearchView} />
          </Switch>
        </BrowserRouter>
      </MovieProvider>
    </ThemeProvider>
  );
};

export default Root;
