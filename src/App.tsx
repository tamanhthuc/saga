import { NotFound, PrivateRoute } from 'components/Common';
import { AdminLayout } from 'components/Layout';
import LoginPage from 'features/auth/pages/LoginPage';
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
