import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import React from 'react';
import ListPage from './ListPage/ListPage';
import Home from './Home/Home';
import DetailsPage from './DetailsPage/DetailsPage';
import Navigation from './Navigation/Navigation';
import Footer from './Footer';

function AppRouter() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/movies" component={ListPage} />
        <Route path="/movie/:id" component={DetailsPage} />
      </Switch>
      <Navigation />
      <Footer />
    </Router>
  );
}

export default AppRouter;
