import React from 'react'
import { Switch, Route } from 'react-router-dom'


import AppShell from './shell-wrapper'

export default class App extends React.Component {
  render () {
    return (
        <Switch>
          <Route
            path="/sso/callback"
            exact
            render={() => {
              return <div>Loading User info</div>
            }}
          />
          <Route component={AppShell} />
        </Switch>
    )
  }
}
