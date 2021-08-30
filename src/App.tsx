import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { Solutions } from './pages/Solutions'
import { Contact } from './pages/Contact'

export const App = () => {

  return (
    <BrowserRouter>
      <div className="app">
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/opportunities" component={Home} />
                <Route exact path="/solutions" component={Solutions} />
                <Route exact path="/contact" component={Contact} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}
