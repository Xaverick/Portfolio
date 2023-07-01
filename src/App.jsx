import React from 'react'
import "./App.scss"
import {About, Footer,Skills, Work, Header, Testimonials} from './container/index'
import { Navbar } from './components'

const App = () => {
  return (
    <div className = "app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />    
      {/* <Testimonials /> */}
      <Footer />
    </div>
  )
}

export default App