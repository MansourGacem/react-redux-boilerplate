import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Test from '../test'

export default class AppShellWrapper extends Component {
  render () {
    return (
          <div className="CadreAppShellWrapper">
            <Switch>
              {<Route exact path="/" render={() => <Redirect to={'/index'} />} />}

              {<Route exact path="/index" component={Test} />}
            </Switch>
          </div>
    )
  }
}
