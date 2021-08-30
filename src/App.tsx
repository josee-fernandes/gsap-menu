import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './app.scss'

import { Home } from './pages/Home'
import { Opportunities } from './pages/Opportunities'
import { Solutions } from './pages/Solutions'
import { Contact } from './pages/Contact'

import Header from './components/Header'

export const App = () => {

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/opportunities" component={Opportunities} />
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
