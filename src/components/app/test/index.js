import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Testing from './test'
import Header from './header'

class Test extends Component {
  render() {
    return (
        <Switch>
          <Route exact path='/index' component={Testing}/>
          <Route path='/header' component={Header}/>
          <Route
            exact
            path="/ams/asset"
            render={() => <Redirect to="/ams/asset/define" />}
          />
        </Switch>
    );
  }
}

export default Test;