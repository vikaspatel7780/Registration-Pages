import React from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import {Toaster} from "react-hot-toast"
function App() {


  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    <Toaster/>
    </>
  )
}

export default App
