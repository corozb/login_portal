import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react'

import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import Staff from './components/pages/Staff'

function onAuthRequired({ history }) {
  history.push('/login')
}

class App extends Component {
  render() {
    return (
      <Router>
        <Security
          issuer='https://dev-901504.okta.com/oauth2/default'
          clientId='0oacgiu2mSQ9f0izl4x6'
          redirectUri={window.location.origin + '/implicit/callback'}
          onAuthRequired={onAuthRequired}
          pkce={true}>
          <Navbar />
          <div className='container'>
            <Route path='/' exact component={Home} />
            <SecureRoute path='/staff' exact component={Staff} />
          </div>
        </Security>
      </Router>
    )
  }
}

export default App
