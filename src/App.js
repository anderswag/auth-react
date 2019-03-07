import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from './logo.svg'

const About = () => (
  <div>
    <p>What are you talking aboot</p>
  </div>
)

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/about/'>About</Link>
                </li>
              </ul>
            </nav>

            <Route path='/about/' component={About} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
