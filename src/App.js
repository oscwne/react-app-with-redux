import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider as ReduxProider } from 'react-redux'

import Header from './components/common/Header'
import About from './components/About'
import Home from './components/Home'
import NotFound from './components/NotFound'
import configStore from './redux/store'
import CoursesContainer from './components/Courses'

const store = configStore()

function App() {
  return (
    <ReduxProider store={store}>
      <div className="container">
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/courses" exact component={CoursesContainer} />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    </ReduxProider>
  )
}

export default App
