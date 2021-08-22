import React from 'react'
import { Navbar, Content } from './components'
import './App.module.css'

export const App: React.FunctionComponent = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Content />
    </>
  )
}
