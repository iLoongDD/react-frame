import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Layouts from './component/common/Layout';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Layouts} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
