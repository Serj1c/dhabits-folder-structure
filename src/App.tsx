import React from 'react'
import { Navbar } from './components'
import { BrowserRouter as Router} from 'react-router-dom' 
import './App.css'

export const App: React.FunctionComponent = (): JSX.Element => {
  return (
    <Router>
      <Navbar />
    </Router>
  )
}
