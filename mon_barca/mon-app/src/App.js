import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Players from './pages/Players';
import Calendar from './pages/Calendar';
import Classement from './pages/Classement';

const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/calendar" exact component={Calendar} />
      <Route path="/players" exact component={Players} />
      <Route path='/classement' exact component={Classement} />
      <Route component={NotFound} />
    </Switch>
    </BrowserRouter>
  );
};

export default App;