import { Switch, Route, useLocation } from 'react-router-dom';

import Home from './Pages/Home';
import NewContact from './Pages/NewContact';
import EditContact from './Pages/EditContact';

export default function Routes() {
  const location = useLocation();
   console.log('location:', location.pathname);
  return(

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/new" render={() => <h1>Rota /new OK!</h1>} />
      {/* <Route path="/new" component={NewContact} /> */}
      <Route path="/edit/:id" component={EditContact} />
    </Switch>

  );
}
