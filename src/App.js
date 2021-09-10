import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/auxiliary/Header';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route
          exact
          path="/movies/:id"
          render={
            (props) => <MovieDetails { ...props } />
          }
        />
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default App;