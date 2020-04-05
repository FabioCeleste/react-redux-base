import React from 'react';
import { Switch } from 'react-router-dom';
import MyRoutes from './myRoutes';

import Login from '../pages/login';
import Page404 from '../pages/page404';

export default function Routes() {
  return (
    <Switch>
      <MyRoutes exact path="/" component={Login} />
      <MyRoutes path="*" component={Page404} />
    </Switch>
  );
}
