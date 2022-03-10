import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Nav from './Components/Navbar/Nav/Nav'
import NotFound from './Components/NotFound/NotFound'
import Protfolio from './Components/Portfolio/PortfolioISec/Protfolio'


export default function App() {
  return (
    <>
      <Nav />
      <Home />
      <Protfolio />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

