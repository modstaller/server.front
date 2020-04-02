import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React from 'react'

import { Mods } from './../index'

import './core.page.css'

function Core () {
  return (
    <div className='Core'>
      <Router>
        <Switch>
          <Route exact path='/' component={Mods}/>
        </Switch>
      </Router>
    </div>
  )
}

export { Core }