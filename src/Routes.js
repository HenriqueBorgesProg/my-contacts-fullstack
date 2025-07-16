import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import Home from './Pages/Home';
import NewContact from './Pages/NewContact';
import EditContact from './Pages/EditContact';

export default function Routes() {
  const location = useLocation();
  console.log('location:', location.pathname);

  return (
    <Switch>
      <Route exact path="/" component={Home} />

      {/* stub de teste: JSX válido */}
      <Route
        path="/new"
        render={() => <h1 style={{ padding: '2rem' }}>Rota /new OK!</h1>}
      />

      <Route path="/edit/:id" component={EditContact} />
    </Switch>
  );
}
