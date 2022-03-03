import { AdminLayout } from 'components/Layout';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          

          <Route path="/admin">
            <AdminLayout />
          </Route>

        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
